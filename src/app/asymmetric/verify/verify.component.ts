import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  fingerprint;

  message = '';

  submitted = false;

  success = false;

  errorMessage = '';

  algorithm = '';

  result: boolean;
  constructor(
    private storageService: StorageService,
    private securityService: SecurityService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    this.securityService.verify(this.message,this.storageService.getPublicKey(this.fingerprint)).subscribe(
      data => {
        this.result = data.result;
        this.algorithm = data.algorithm;
      },
      error => {this.errorMessage = error.message},
      () => {this.submitted= false; this.success = true;}
    )
  }

  changeFingerprint(fingerprint): void {
    this.fingerprint = this.storageService.publicKeyExists(fingerprint) ? fingerprint : null;
  }
}

import { SecurityService } from './../../services/security.service';
import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asymmetric-encryption',
  templateUrl: './asymmetric-encryption.component.html',
  styleUrls: ['./asymmetric-encryption.component.css']
})
export class AsymmetricEncryptionComponent implements OnInit {

  fingerprint;

  message = '';

  submitted = false;

  success = false;

  errorMessage = '';

  result = '';
  constructor(
    private storageService: StorageService,
    private securityService: SecurityService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    this.securityService.asymEncrypt(this.message,this.storageService.getPublicKey(this.fingerprint)).subscribe(
      data => {
        this.result = data.result;
      },
      error => {this.errorMessage = error.message},
      () => {this.submitted= false; this.success = true;}
    )
  }

  changeFingerprint(fingerprint): void {
    this.fingerprint = this.storageService.publicKeyExists(fingerprint) ? fingerprint : null;
  }
}

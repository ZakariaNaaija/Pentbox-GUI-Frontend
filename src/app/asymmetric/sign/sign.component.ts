import { Component, OnInit } from '@angular/core';
import { StorageService } from './../../services/storage.service';
import { SecurityService } from './../../services/security.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  fingerprint;

  message = '';

  passphrase = '';

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
    this.securityService.sign(this.message,this.storageService.getPrivateKey(this.fingerprint),this.passphrase).subscribe(
      data => {
        this.result = data.result;
      },
      error => {this.errorMessage = error.message},
      () => {this.submitted= false; this.success = true;}
    )
  }

  changeFingerprint(fingerprint): void {
    this.fingerprint = this.storageService.privateKeyExists(fingerprint) ? fingerprint : null;
  }
}

import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-asymmetric-decryption',
  templateUrl: './asymmetric-decryption.component.html',
  styleUrls: ['./asymmetric-decryption.component.css']
})
export class AsymmetricDecryptionComponent implements OnInit {

  fingerprint;

  message = '';

  passphrase = '';

  algorithm = '';

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
    this.securityService.asymDecrypt(this.message,this.storageService.getPrivateKey(this.fingerprint),this.passphrase).subscribe(
      data => {
        this.result = data.result;
        this.algorithm = data.algorithm;
      },
      error => {this.errorMessage = error.message},
      () => {this.submitted= false; this.success = true;}
    )
  }

  changeFingerprint(fingerprint): void {
    this.fingerprint = this.storageService.privateKeyExists(fingerprint) ? fingerprint : null;
  }
}

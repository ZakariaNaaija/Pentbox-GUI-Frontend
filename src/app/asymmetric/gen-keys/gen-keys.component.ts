import { StorageService } from './../../services/storage.service';
import { SecurityService } from './../../services/security.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gen-keys',
  templateUrl: './gen-keys.component.html',
  styleUrls: ['./gen-keys.component.css']
})
export class GenKeysComponent implements OnInit {

  passphrase = '';

  algorithms = ['RSA','DSA'];

  chosenAlgorithm = '';

  submitted = false;

  errorMessage;

  privateKey = '';

  publicKey = '';

  fingerPrint = '';

  success = false;

  constructor(
    private securityService: SecurityService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    this.securityService.genKeys(this.passphrase, this.chosenAlgorithm).subscribe(
      data => {
        this.fingerPrint= data.fingerprint;
        this.publicKey = data.public;
        this.privateKey = data.secret;
        this.storageService.saveKeys(this.fingerPrint,this.privateKey,this.publicKey);
      },
      error => this.errorMessage = error.message,
      () => {this.success = true ; this.submitted = false;}
    )
  }

}

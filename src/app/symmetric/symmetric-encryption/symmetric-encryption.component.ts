import { SecurityService } from './../../services/security.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symmetric-encryption',
  templateUrl: './symmetric-encryption.component.html',
  styleUrls: ['./symmetric-encryption.component.css']
})
export class SymmetricEncryptionComponent implements OnInit {

  message = '';

  algorithms = [
    '3DES', 'CAST5', 'BLOWFISH', 'AES', 'AES192', 'AES256', 'TWOFISH', 'CAMELLIA128', 'CAMELLIA192', 'CAMELLIA256'
  ]

  chosenAlgorithm = '';

  passphrase = '';

  submitted = false;

  result;

  errorMessage;

  constructor(
    private securityService : SecurityService
  ) { }

  ngOnInit(): void {
  }

  encrypt() : void {
    this.submitted = true;
    this.securityService.symEncrypt(this.message,this.chosenAlgorithm,this.passphrase).subscribe(
      data => {this.submitted=false; this.result=data.result; this.passphrase=data.password.length ? data.password : this.passphrase},
      error => {console.log(error); this.errorMessage=error.message},
    )
  }


}

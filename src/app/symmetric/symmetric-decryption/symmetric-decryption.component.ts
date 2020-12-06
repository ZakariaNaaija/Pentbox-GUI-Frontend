import { SecurityService } from './../../services/security.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symmetric-decryption',
  templateUrl: './symmetric-decryption.component.html',
  styleUrls: ['./symmetric-decryption.component.css']
})
export class SymmetricDecryptionComponent implements OnInit {

  message = '';

  passphrase = '';

  algorithm = '';

  submitted = false;

  result;

  errorMessage;

  constructor(
    private securityService: SecurityService
  ) { }

  ngOnInit(): void {
  }

  decrypt() : void {
    this.submitted = true;
    this.securityService.symDecrypt(this.message,this.passphrase).subscribe(
      data => {this.submitted=false; this.result=data.result; this.algorithm = data.algorithm},
      error => {console.log(error); this.errorMessage=error.message},
    )
  }

}

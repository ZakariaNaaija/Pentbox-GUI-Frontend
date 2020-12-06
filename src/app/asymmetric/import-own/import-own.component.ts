import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-import-own',
  templateUrl: './import-own.component.html',
  styleUrls: ['./import-own.component.css']
})
export class ImportOwnComponent implements OnInit {
  submitted = false;

  success = false;

  errorMessage = '';

  publicKey = '';

  fingerprint = '';

  alreadyExists = false;

  constructor(
    private securityService: SecurityService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    this.securityService.importOwnKey(this.publicKey).subscribe(
      data => {
        this.fingerprint=data.fingerprint;
        if(this.fingerprint!='Bad Public Key') {
          this.storageService.importKey(this.fingerprint,this.publicKey);
        }

      },
      error => this.errorMessage=error.message,
      ()=> {this.success=true; this.submitted=false}
    )
  }

}

import { StorageService } from './../../services/storage.service';
import { SecurityService } from './../../services/security.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-keys',
  templateUrl: './import-keys.component.html',
  styleUrls: ['./import-keys.component.css']
})
export class ImportKeysComponent implements OnInit {

  fingerprint = '';

  submitted = false;

  success = false;

  errorMessage = '';

  publicKey = '';

  alreadyExists = false;

  constructor(
    private securityService: SecurityService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    this.securityService.importKey(this.fingerprint).subscribe(
      data => {
        this.publicKey=data.public;
        this.storageService.importKey(this.fingerprint,this.publicKey);

      },
      error => this.errorMessage=error.message,
      ()=> {this.success=true; this.submitted=false}
    )
  }

  checkFingerprint(fingerprint) {
    this.alreadyExists = this.storageService.publicKeyExists(fingerprint);
  }

}

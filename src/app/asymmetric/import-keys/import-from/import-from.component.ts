import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-import-from',
  templateUrl: './import-from.component.html',
  styleUrls: ['./import-from.component.css']
})
export class ImportFromComponent implements OnInit {
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
        if(this.publicKey!='Bad Fingerprint') {
        this.storageService.importKey(this.fingerprint,this.publicKey);
        }

      },
      error => this.errorMessage=error.message,
      ()=> {this.success=true; this.submitted=false}
    )
  }

  checkFingerprint(fingerprint) {
    this.alreadyExists = this.storageService.publicKeyExists(fingerprint);
  }
}

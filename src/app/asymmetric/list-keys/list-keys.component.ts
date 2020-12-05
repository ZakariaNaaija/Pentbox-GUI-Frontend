import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-keys',
  templateUrl: './list-keys.component.html',
  styleUrls: ['./list-keys.component.css']
})
export class ListKeysComponent implements OnInit {
  fingerprints : string[];

  chosenFingerprint = '';
  chosenPublicKey = '';
  chosenPrivateKey = '';
  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.fingerprints = this.storageService.getFingerPrints();
  }

  setKeyData(fingerprint: string): void {
    const data = this.storageService.getKeys(fingerprint);
    if (data) {
      this.chosenFingerprint=fingerprint;
      this.chosenPrivateKey=data.privateKey;
      this.chosenPublicKey=data.publicKey;
    }
  }

}

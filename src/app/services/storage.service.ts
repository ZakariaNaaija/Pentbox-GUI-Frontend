import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  saveKeys(fingerprint: string, privateKey: string, publicKey: string): void {
    localStorage.setItem(fingerprint,JSON.stringify(
      {
        'publicKey' : publicKey,
        'privateKey' : privateKey
      }
    ));
    this.addFingerprint(fingerprint);

  }

  private addFingerprint(fingerprint: string) {
    const fingerprints = localStorage.getItem('fingerprints');
    if (!fingerprints) {
      localStorage.setItem('fingerprints',JSON.stringify([fingerprint]));
    }
    else {
      const fingerprintsArray = JSON.parse(fingerprints);
      fingerprintsArray.push(fingerprint);
      localStorage.setItem('fingerprints',
      JSON.stringify(fingerprintsArray
    ));
    }
  }

  getKeys(fingerprint: string) {
    return JSON.parse(localStorage.getItem(fingerprint));
  }

  getFingerPrints() {
    return JSON.parse(localStorage.getItem('fingerprints'));
  }

  importKey(fingerprint:string, publicKey: string) {
    if (localStorage.getItem(fingerprint)==null) {
      localStorage.setItem(fingerprint, JSON.stringify({'publicKey':publicKey}));
      this.addFingerprint(fingerprint);
    }
    else {
      localStorage.setItem(fingerprint, JSON.stringify({'publicKey':publicKey}));
    }

  }

  privateKeyExists(fingerprint: string): boolean {
    const keys = JSON.parse(localStorage.getItem(fingerprint));
    return keys && keys.privateKey ;
  }

  publicKeyExists(fingerprint: string): boolean {
    const keys = JSON.parse(localStorage.getItem(fingerprint));
    return keys && keys.publicKey ;
  }

  getPublicKey(fingerprint: string): string {
    const keys = JSON.parse(localStorage.getItem(fingerprint));
    return keys.publicKey;
  }

  getPrivateKey(fingerprint: string): string {
    return (JSON.parse(localStorage.getItem(fingerprint))).privateKey;
  }

}

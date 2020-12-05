import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient) { }

  routeEndpoint = '';
  encoder(word:string): Observable<any> {
    this.routeEndpoint="base64encode";
    return this.http.post<any>(environment.baseURL + this.routeEndpoint, {message:word})
  }
  decoder(word:string): Observable<any> {
    this.routeEndpoint="base64decode";
    return this.http.post<any>(environment.baseURL + this.routeEndpoint, {message:word})
  }
  hash(word:string,algorithm:string): Observable<any>{
    this.routeEndpoint="hash";
    return this.http.post<any>(environment.baseURL + this.routeEndpoint, {message:word,algorithm:algorithm });

  }

  cracker(hash:string,type:string,algorithm): Observable<any>{
    this.routeEndpoint="crack/"+type;
    return this.http.post<any>(environment.baseURL + this.routeEndpoint, {message:hash,algorithm:algorithm });
  }

  symEncrypt(message: string, algorithm: string, passphrase: string): Observable<any> {
    this.routeEndpoint = 'symetrique/chiffrer';
    return this.http.post<any>(environment.baseURL+this.routeEndpoint,{message : message, algorithm: algorithm, password: passphrase})
  }

  symDecrypt(message: string, passphrase: string): Observable<any> {
    this.routeEndpoint = 'symetrique/dechiffrer';
    return this.http.post<any>(environment.baseURL+this.routeEndpoint,{encrypted : message, password: passphrase});
  }

  genKeys(passphrase: string, algorithm: string): Observable<any> {
    this.routeEndpoint = 'asymetrique/genkeys';
    return this.http.post<any>(environment.baseURL + this.routeEndpoint, {passphrase: passphrase, algorithm: algorithm});
  }

  importKey(fingerprint: string): Observable<any> {
    this.routeEndpoint= 'asymetrique/import';
    return this.http.post<any>(environment.baseURL+this.routeEndpoint,{fingerprint: fingerprint});
  }

  asymEncrypt(message: string, publicKey: string): Observable<any> {
    this.routeEndpoint = 'asymetrique/chiffrer';
    return this.http.post<any>(environment.baseURL+this.routeEndpoint,{message: message, recipient_public_key_data: publicKey});
  }

  asymDecrypt(message: string, privateKey: string, passphrase: string): Observable<any> {
    this.routeEndpoint = 'asymetrique/dechiffrer';
    return this.http.post<any>(environment.baseURL+this.routeEndpoint,{encrypted: message, local_private_key_data: privateKey, passphrase: passphrase})
  }

  sign(message: string, privateKey: string, passphrase: string,): Observable<any> {
    this.routeEndpoint= 'asymetrique/sign';
    return this.http.post<any>(environment.baseURL+this.routeEndpoint,{message: message, passphrase: passphrase, local_private_key_data: privateKey});
  }

  verify(encrypted: string, signer_public_key: string): Observable<any> {
    this.routeEndpoint = 'asymetrique/verify';
    return this.http.post<any>(environment.baseURL+this.routeEndpoint,{encrypted,signer_public_key});
  }
}

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
}

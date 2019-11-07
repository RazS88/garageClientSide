import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { text } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private httpClient: HttpClient) { }

  public login(name:string , password:string):Observable<any>{
    return this.httpClient.post('http://localhost:8080/api/login?name='
    + name + '&password=' + password,
    {withCredentials:true, responseType:'text'});
  }


}

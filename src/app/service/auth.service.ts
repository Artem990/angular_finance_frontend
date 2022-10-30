import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:8064/api/auth/signin';

  constructor(private httpClient: HttpClient) { }

  public isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  proceedLogin(userCred: any) {
    const headers = { 'content-type': 'application/json'}  
    console.log('userCred', JSON.stringify(userCred));
    console.log('headers', JSON.stringify(headers));
    return this.httpClient.post(this.apiUrl, userCred, {'headers':headers});
  }

}

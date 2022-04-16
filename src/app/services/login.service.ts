import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email, password){
    return this.http.post<any>(environment.URL_LOGIN, 
      { 
        email: email, 
        password: password 
      }
    )
  }

  isAuthenticated(): boolean {
    const token = JSON.parse(localStorage.getItem('currentUser'));
    if(token != null)
    return true
    return false
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getToken() {
    return localStorage.getItem('Token');
  }

  public setToken(token) {
    localStorage.setItem('Token', token);
  }

  public logout() {
    localStorage.clear();
  }
}

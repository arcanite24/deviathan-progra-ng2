import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

  public api: string;
  public user: any;
  public token: string;

  constructor(private http: Http) {
    this.api = 'http://localhost:1337/';
    this.user = JSON.parse(localStorage.getItem('user'));
    this.token = localStorage.getItem('token');
  }

  login(username: string, password: string) {
    return this.http.post(this.api + 'user/login', {username: username, password: password}).map(res => res.json());
  }

  logout() {
    this.user = null;
    this.token = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  saveAuth(user: any, token: string) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    this.user = user;
    this.token = token;
  }

}

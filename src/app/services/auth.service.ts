import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class AuthService {

  public api: string;
  public user: any;
  public token: string;
  public listeners;
  public eventsSubject;
  public events;

  constructor(private http: Http) {
    this.api = 'http://localhost:1337/';
    this.user = JSON.parse(localStorage.getItem('user'));
    this.token = localStorage.getItem('token');
    //Login Event Handler
    this.listeners = {};
    this.eventsSubject = new Rx.Subject();
    this.events = Rx.Observable.from(this.eventsSubject);

    this.events.subscribe(
        ({name, args}) => {
            if (this.listeners[name]) {
                for (let listener of this.listeners[name]) {
                    listener(...args);
                }
            }
        });
  }

  on(name, listener) {
        if (!this.listeners[name]) {
            this.listeners[name] = [];
        }

        this.listeners[name].push(listener);
    }

    broadcast(name, ...args) {
        this.eventsSubject.next({
            name,
            args
        });
    }

  login(username: string, password: string) {
    return this.http.post(this.api + 'user/login', {username: username, password: password}).map(res => res.json());
  }

  logout(cb) {
    this.broadcast('user-auth', false);
    this.user = null;
    this.token = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    cb();
  }

  saveAuth(user: any, token: string) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    this.user = user;
    this.token = token;
    this.broadcast('user-auth', true);
  }

}

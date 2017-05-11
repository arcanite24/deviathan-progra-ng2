import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isAuth: boolean;
  public currState: string;
  
  constructor(private router: Router, private auth: AuthService) {

    this.auth.on('user-auth', data => this.isAuth = data);

    this.isAuth = this.auth.token ? true : false;
    if(!this.isAuth) {this.router.navigate(['/login']); return;};
    this.router.events.subscribe(value => {
      this.isAuth = this.auth.token ? true : false;
      if(value.url == '/login') {
        if(this.isAuth) {
          this.router.navigate(['/']);
          return;
        }
      }
      if(!this.isAuth) this.router.navigate(['/login']);
    });
  }

}

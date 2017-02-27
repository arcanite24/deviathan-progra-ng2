import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private loader: boolean = false;
  private loginData: any;

  constructor(private auth: AuthService, private snack: MdSnackBar, private router: Router) {
    this.loginData = {username: '', password: ''};
  }

  login(username: string, password: string) {
    this.loader = true;
    this.auth.login(username, password).subscribe(
      data => {
        if(data.err) {
          let snackError = this.snack.open(data.err, ' CERRAR', {duration: 2000});
          this.loader = false;
        } else {
          let snackSuccess = this.snack.open('Sesión iniciada correctamente', ' CERRAR', {duration: 2000});
          this.auth.saveAuth(data.user, data.token);
          this.router.navigate(['/']);
          this.loader = false;
        }
      },
      err => {
        let snackError = this.snack.open('Error con el servidor, intenta de nuevo', ' CERRAR', {duration: 2000});
        this.loader = false;
      }
    );
  }

}

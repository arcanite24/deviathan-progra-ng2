import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { BackServiceService } from '../../services/back-service.service';
import { routerTransition } from '../../animations/router.animations';

@Component({
  selector: 'app-users-add-page',
  templateUrl: './users-add-page.component.html',
  styleUrls: ['./users-add-page.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class UsersAddPageComponent {

  private addUserData: any;
  private loader: boolean;

  constructor(private back: BackServiceService, private router: Router, private snack: MdSnackBar) {
    this.addUserData = {};
    this.loader = false;
  }

  addUser(data: any) {
    this.loader = true;
    this.back.addUser(data.firstName, data.lastName, data.boleta, data.sexo, data.email).subscribe(
      res => {
        this.loader = false;
        this.snack.open('El usuario ' + data.firstName + ' ha sido agregado correctamente', 'X', {duration: 2000});
        this.router.navigate(['../']);
      },
      err => {
        console.log(err);
        
        this.loader = false;
        this.snack.open('Error, no se pudo agregar el usuario.', 'X', {duration: 2000});
        this.router.navigate(['../']);
      }
    );
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { BackServiceService } from '../../services/back-service.service';
import { routerTransition } from '../../animations/router.animations';

@Component({
  selector: 'app-teachers-add-page',
  templateUrl: './teachers-add-page.component.html',
  styleUrls: ['./teachers-add-page.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class TeachersAddPageComponent {

  private addUserData: any;
  private loader: boolean;

  constructor(private back: BackServiceService, private router: Router, private snack: MdSnackBar) {
    this.addUserData = {};
    this.loader = false;
  }

  addUser(data: any) {
    this.loader = true;
    this.back.addTeacher(data.firstName, data.lastName, data.email).subscribe(
      res => {
        this.loader = false;
        this.snack.open('El profesor ' + data.firstName + ' ha sido agregado correctamente', 'X', {duration: 2000});
        this.router.navigate(['../']);
      },
      err => {
        console.log(err);
        
        this.loader = false;
        this.snack.open('Error, no se pudo agregar el profesor.', 'X', {duration: 2000});
        this.router.navigate(['../']);
      }
    );
  }

}

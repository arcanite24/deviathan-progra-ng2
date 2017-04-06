import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { BackServiceService } from '../../services/back-service.service';
import { routerTransition } from '../../animations/router.animations';

@Component({
  selector: 'app-teachers-edit-page',
  templateUrl: './teachers-edit-page.component.html',
  styleUrls: ['./teachers-edit-page.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class TeachersEditPageComponent implements OnInit {

  private loader: boolean;
  private user: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private back: BackServiceService,
    private snack: MdSnackBar
  ) {
    this.loader = false;
    this.user = {};
  }

  ngOnInit() {
    this.loader = true;
    let id = this.route.snapshot.params['id'];
    this.back.getDetailUser(id).subscribe(
      user => {
        this.user = user;
        this.loader = false;
      },
      err => {
        this.loader = false;
        this.snack.open('Error, no se pudo cargar el usuario', '', {duration: 2000});
        this.router.navigate(['../../'], {relativeTo: this.route});
      }
    );
  }

  editUser(user: any) {
    this.loader = true;
    this.back.editUser(user).subscribe(
      res => {
        this.loader = false;
        this.snack.open('Usuario editado correctamente', '', {duration: 2000});
        this.router.navigate(['../../'], {relativeTo: this.route});
      },
      err => {
        this.loader = false;
        this.snack.open('Error, no se pudo editar el usuario', '', {duration: 2000});
        this.router.navigate(['../../'], {relativeTo: this.route});
      }
    );
  }

}

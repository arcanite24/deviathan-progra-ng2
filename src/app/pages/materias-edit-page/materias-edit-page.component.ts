import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { routerTransition } from '../../animations/router.animations';
import { BackServiceService } from '../../services/back-service.service';

@Component({
  selector: 'app-materias-edit-page',
  templateUrl: './materias-edit-page.component.html',
  styleUrls: ['./materias-edit-page.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class MateriasEditPageComponent implements OnInit {

  private loader: boolean;
  private materia: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private back: BackServiceService,
    private snack: MdSnackBar
  ) {
    this.loader = false;
    this.materia = {};
  }

  ngOnInit() {
    this.loader = true;
    let id = this.route.snapshot.params['id'];
    this.back.getDetailMateria(id).subscribe(
      data => {
        this.loader = false;
        this.materia = data;
      },
      err => {
        this.loader = false;
        this.snack.open('Error, no se pudo cargar la materia', '', {duration: 2000});
        this.router.navigate(['../../'], {relativeTo: this.route});
      }
    );
  }

  editMateria(materia: any) {
    this.loader = true;
    this.back.editMateria(materia).subscribe(
      data => {
        this.loader = false;
        this.snack.open('Materia editada correctamente', '', {duration: 2000});
        this.router.navigate(['../../'], {relativeTo: this.route});
      },
      err => {
        this.loader = false;
        this.snack.open('Error, no se pudo editar la materia', '', {duration: 2000});
        this.router.navigate(['../../'], {relativeTo: this.route});
      }
    );
  }

}

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { BackServiceService } from '../../services/back-service.service';
import { routerTransition } from '../../animations/router.animations';

@Component({
  selector: 'app-materias-add-page',
  templateUrl: './materias-add-page.component.html',
  styleUrls: ['./materias-add-page.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class MateriasAddPageComponent {

  private loader: boolean;
  private addMateriaData: any;

  constructor(
    private back: BackServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private snack: MdSnackBar
  ) {
    this.loader = false;
    this.addMateriaData = {};
  }

  addMateria(data: any) {
    this.loader = true;
    this.back.addMateria(data.name, data.semestre).subscribe(
      res => {
       this.loader = false;
       this.snack.open('Materia ' + data.name + ' ha sido agregada correctamente', '', {duration: 2000}); 
       this.router.navigate(['../'], {relativeTo: this.route});
      },
      err => {
        this.loader = false;
        this.snack.open('Error, no se pudo crear la materia', '', {duration: 2000});
      }
    );
  }

}

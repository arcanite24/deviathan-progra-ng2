import { MdSnackBar } from '@angular/material';
import { BackServiceService } from './../../../services/back-service.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../animations/router.animations';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno-tareas',
  templateUrl: './alumno-tareas.component.html',
  styleUrls: ['./alumno-tareas.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AlumnoTareasComponent implements OnInit {

  private loader: boolean;
  private allTareas: any[];

  constructor(
    public back: BackServiceService,
    public snack: MdSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loader = false;
    this.allTareas = [];
  }

  ngOnInit() {
    this.loader = true;
    this.back.getAllTareasAlumno().subscribe(
      data => {
        this.loader = false;
        this.allTareas = data;
        console.log(data);
        
      },
      err => {
        this.loader = false;
        this.snack.open('Error, no se pudieron cargar las tareas.', '', {duration: 4000});
        this.router.navigate(['../'], {relativeTo: this.route});
      }
    );
  }

}

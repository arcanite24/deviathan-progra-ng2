import { AlumnoTareasDetailComponent } from './../alumno-tareas-detail/alumno-tareas-detail.component';
import { AlumnoTareasRespuestaAddComponent } from './../alumno-tareas-respuesta-add/alumno-tareas-respuesta-add.component';
import { MdDialog } from '@angular/material';
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
    private route: ActivatedRoute,
    private dialog: MdDialog
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
      },
      err => {
        this.loader = false;
        this.snack.open('Error, no se pudieron cargar las tareas.', '', {duration: 4000});
        this.router.navigate(['../'], {relativeTo: this.route});
      }
    );
  }

  openAddRespuesta(id: string) {
    let modal = this.dialog.open(AlumnoTareasRespuestaAddComponent, {
      width: '50%',
      data: {id: id}
    });
    modal.afterClosed().subscribe(
      data => {
        if(!data) return;
        if(data.err) return this.snack.open('Error, no se pudo agregar la respuesta', '', {duration: 4000});
        this.snack.open('Respuesta agregada Correctamente', '', {duration: 4000});
      }
    );
  }

  openTareaDetail(id: string) {
    let modal = this.dialog.open(AlumnoTareasDetailComponent, {
      width: '50%',
      data: {id: id}
    });
  }

}

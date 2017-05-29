import { MdDialogRef } from '@angular/material';
import { BackServiceService } from './../../../services/back-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno-tareas-detail',
  templateUrl: './alumno-tareas-detail.component.html',
  styleUrls: ['./alumno-tareas-detail.component.css']
})
export class AlumnoTareasDetailComponent implements OnInit {

  private loader: boolean;
  private tarea: any;
  private allRespuestas: any[];

  constructor(
    private back: BackServiceService,
    private ref: MdDialogRef<AlumnoTareasDetailComponent>
  ) {
    this.loader = false;
    this.tarea = {};
    this.allRespuestas = [];
  }

  ngOnInit() {
    this.loader = true;
    this.back.getTareaDetail(this.ref.config.data.id).subscribe(
      data => {
        this.tarea = data;
        this.back.getMyRespuestas().subscribe(
          data => {
            this.loader = false;
            this.allRespuestas = data;
          },
          err => {
            this.loader = false;
            this.ref.close({err: 'Error, no se pudieron cargar las respuestas...'})
          }
        );
      },
      err => {
        this.loader = false;
        this.ref.close({err: 'Error, no se pudo cargar la tarea...'})
      }
    );
  }

}

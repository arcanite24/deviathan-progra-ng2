import { MdSnackBar } from '@angular/material';
import { BackServiceService } from './../../../services/back-service.service';
import { AlumnoReservasAddComponent } from './../alumno-reservas-add/alumno-reservas-add.component';
import { MdDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno-tareas-respuesta-add',
  templateUrl: './alumno-tareas-respuesta-add.component.html',
  styleUrls: ['./alumno-tareas-respuesta-add.component.css']
})
export class AlumnoTareasRespuestaAddComponent implements OnInit {

  private addRespuestaData: any;
  private loader: boolean;

  constructor(
    public ref: MdDialogRef<AlumnoReservasAddComponent>,
    private back: BackServiceService,
    private snack: MdSnackBar
  ) {
    this.addRespuestaData = {};
  }

  ngOnInit() {
  }

  addRespuesta(text: string) {
    this.loader = false;
    this.back.addRespuesta(this.ref.config.data.id, text).subscribe(
      data => {
        this.loader = false;
        this.ref.close(data)
      },
      err => {
        this.loader = false;
        this.ref.close({err: 'Error, no se pudo agregar la tarea...'})
      }
    );
  }

}

import { BackServiceService } from './../../../services/back-service.service';
import { MdDialogRef, MdSnackBar } from '@angular/material';
import { DateModel, DatePickerModule, DatePickerOptions } from 'ng2-datepicker';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesor-tareas-edit',
  templateUrl: './profesor-tareas-edit.component.html',
  styleUrls: ['./profesor-tareas-edit.component.css']
})
export class ProfesorTareasEditComponent implements OnInit {

  private loader: boolean;
  private tarea: any;
  private allClases: any[];
  private entregaModel: DateModel;
  private options: DatePickerOptions;

  constructor(
    public ref: MdDialogRef<ProfesorTareasEditComponent>,
    public back: BackServiceService,
    public snack: MdSnackBar
  ) {
    this.loader = false;
    this.tarea = {};
    this.allClases = [];
  }

  ngOnInit() {
    this.loader = true;
    this.back.getTareaDetail(this.ref.config.data.id).subscribe(
      data => {
        this.tarea = data;
        this.back.getClasesProfesor().subscribe(
          data => {
            this.loader = false;
            this.allClases = data;
          },
          err => {
            this.loader = false;
            this.snack.open('Error, no se pudieron cargar las clases que impartes...', '', {duration: 4000});
            this.ref.close({err: err});
          }
        );
      },
      err => {
        this.loader = false;
        this.snack.open('Error, cargar la tarea que querías editar.', '', {duration: 4000});
        this.ref.close({err: err});
      }
    );
  }

  editTarea(clase: any, title: string, desc: string, entrega: string, id: string) {
    if(!clase) return this.snack.open('Selecciona una clase...', '', {duration: 4000});
    if(!title) return this.snack.open('Ingresa un título...', '', {duration: 4000});
    if(!desc) return this.snack.open('Ingresa una descripción...', '', {duration: 4000});
    if(!entrega) return this.snack.open('Selecciona una fecha de entrega...', '', {duration: 4000});
    this.loader = true;
    this.back.editTarea(clase, title, desc, entrega, id).subscribe(
      data => {
        this.loader = false;
        this.ref.close(data);
      },
      err => {
        this.loader = false;
        this.snack.open('Error, no se pudo editar la tarea...', '', {duration: 4000});
        this.ref.close({err: err});
      }
    );
  }

}

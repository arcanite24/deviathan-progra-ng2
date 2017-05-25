import { MdSnackBar, MdDialogRef } from '@angular/material';
import { BackServiceService } from './../../../services/back-service.service';
import { Component, OnInit } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-profesor-tareas-add',
  templateUrl: './profesor-tareas-add.component.html',
  styleUrls: ['./profesor-tareas-add.component.css']
})
export class ProfesorTareasAddComponent implements OnInit {
  
  private loader: boolean;
  private allClases: any[];
  private addTareaData: any;

  private entregaModel: DateModel;
  private options: DatePickerOptions;

  constructor(
    public ref: MdDialogRef<ProfesorTareasAddComponent>,
    public back: BackServiceService,
    public snack: MdSnackBar
  ) {
    this.loader = false;
    this.allClases = [];
    this.addTareaData = {};
    this.options = new DatePickerOptions({locale: 'mx', style: 'normal', selectYearText: 'Seleccionar Año', todayText: 'Hoy', clearText: 'Limpiar'});
  }

  ngOnInit() {
    this.loader = true;
    this.back.getClasesProfesor().subscribe(
      data => {
        this.loader = false;
        this.allClases = data;
      },
      err => {
        this.loader = false;
        this.snack.open('Error, no se pudieron cargar las clases...', '', {duration: 4000});
        this.ref.close({err: err});
      }
    );
  }

  addTarea(clase: any, title: string, desc: string, entrega: any) {
    if(!clase) return this.snack.open('Selecciona una clase...', '', {duration: 4000});
    if(!title) return this.snack.open('Ingresa un título...', '', {duration: 4000});
    if(!desc) return this.snack.open('Ingresa una descripción...', '', {duration: 4000});
    if(!entrega) return this.snack.open('Selecciona una fecha de entrega...', '', {duration: 4000});
    console.log(entrega);
    
    this.loader = true;
    this.back.addTarea(clase, title, desc, entrega).subscribe(
      data => {
        this.loader = false;
        this.ref.close(data);
      },
      err => {
        this.loader = false;
        this.snack.open('Error, no se pudo agregar la tarea...', '', {duration: 4000});
        this.ref.close({err: err});
      }
    );
  }

}

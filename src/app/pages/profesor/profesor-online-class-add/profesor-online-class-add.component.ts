import { MdDialogRef } from '@angular/material';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { BackServiceService } from './../../../services/back-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesor-online-class-add',
  templateUrl: './profesor-online-class-add.component.html',
  styleUrls: ['./profesor-online-class-add.component.css']
})
export class ProfesorOnlineClassAddComponent implements OnInit {

  private loader: boolean;
  private allMaterias: any[];
  private addClaseData: any;

  private options: DatePickerOptions;
  private inicioModel: DateModel;

  constructor(
    private back: BackServiceService,
    private snack: MdSnackBar,
    private ref: MdDialogRef<ProfesorOnlineClassAddComponent>
  ) {
    this.allMaterias = [];
    this.addClaseData = {};
    this.loader = false;
    this.options = new DatePickerOptions({locale: 'es', style: 'normal', selectYearText: 'Seleccionar Año', todayText: 'Hoy', clearText: 'Limpiar'});
  }

  ngOnInit() {
    this.loader = true;
    this.back.getAllMaterias().subscribe(
      data => {
        this.loader = false;
        this.allMaterias = data;
      },
      err => {
        this.loader = false;
        this.ref.close({err: 'Error, no se pudieron cargar todas las materias.'});
      }
    );
  }
  
  addClaseOnline(title: string, desc: string, materia: string, inicio: string) {
    this.loader = true;
    this.back.addClaseOnline(title, desc, materia, inicio).subscribe(
      data => {
        this.loader = false;
        this.ref.close(data);
      },
      err => {
        this.loader = false;
        this.ref.close({err: 'Error, no se pudo agregar la clase online.'});
      }
    );
  }

}

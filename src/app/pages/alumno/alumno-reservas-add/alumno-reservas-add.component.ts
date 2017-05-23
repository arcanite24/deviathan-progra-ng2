import { Component, OnInit } from '@angular/core';
import { MdDialogRef, MdSnackBar } from '@angular/material';
import * as _ from "lodash";

import { BackServiceService } from '../../../services/back-service.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-alumno-reservas-add',
  templateUrl: './alumno-reservas-add.component.html',
  styleUrls: ['./alumno-reservas-add.component.css']
})
export class AlumnoReservasAddComponent implements OnInit {

  private loader: boolean;
  private addReservaData: any;
  private allSalones: Array<any>;
  private allHoras: Array<number>;
  private allItems: Array<any>;
  private availableHours: Array<any>;
  private hoursItem: Array<any>;

  constructor(
    public dialogRef: MdDialogRef<AlumnoReservasAddComponent>,
    public back: BackServiceService,
    public snack: MdSnackBar,
    public auth: AuthService
  ) {
    this.addReservaData = {};
    this.loader = false;
    this.availableHours = null;
    this.hoursItem = null;
    this.allHoras = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
  }

  ngOnInit() {
    this.loader = true;
    this.back.getAllSalones().subscribe(
      data => {
        this.allSalones = data;
        this.loader = false;
      },
      err => {
        this.loader = false;
        this.dialogRef.close({err: err});
      }
    );
  }

  changeSalon(id: any) {
    this.back.getAvailableHours(id).subscribe(
      data => this.availableHours = data,
      err => console.log(err)
    );
    this.back.getAllItemsSalon(id).subscribe(
      data => this.allItems = data,
      err => this.snack.open('Error, no se pudo cargar el inventario del salón.', '', {duration: 2000})
    )
  }

  checkIn(hora: number): boolean {
    if(!hora) return;
    if(!this.availableHours) return;
    this.availableHours = this.availableHours.map(clase => [clase[0], clase[1]]);
    let horas = _.flattenDeep(this.availableHours);
    horas = horas.map(hora => parseInt(hora));
    if(horas.indexOf(hora) >= 0) {
      this.snack.open('A las ' + hora + ':00 el salón está ocupado.', '', {duration: 2000});
      this.addReservaData.in = null;
      return false;
    } else {
      return true;
    }
  }

  checkItem(id: string) {
    if(!id) return;
    this.loader = true;
    this.back.getReservasItem(id).subscribe(
      data => {
        this.hoursItem = data.map(r => [r.horaIn, r.horaOut]);
        this.loader = false;
      },
      err => {
        this.snack.open('Error, no se pudieron cargar las reservas del Inventario.', '', {duration: 4000});
        this.loader = false;
      }
    );
  }

  addReserva(horaIn: number, horaOut: number, salon: string, item: string) {
    if(!horaIn) return this.snack.open('Error, selecciona una hora de entrada.', '', {duration: 4000});
    if(!horaOut) return this.snack.open('Error, selecciona una hora de salida.', '', {duration: 4000});
    if(horaIn > horaOut) return this.snack.open('Error, no puedes salir antes de entrar.', '', {duration: 4000});
    if(!salon) return this.snack.open('Error, selecciona salón.', '', {duration: 4000});
    if(!item) return this.snack.open('Error, selecciona una PC.', '', {duration: 4000});
    if(horaIn == horaOut) return this.snack.open('Error, Las horas de entrada y salida no pueden ser iguales.', '', {duration: 4000});
    let horasReserva = _.range(horaIn, horaOut);
    let totalHorasReserva = horasReserva.length;
    let horas = _.flattenDeep(this.availableHours);
    horas = horas.map(hora => parseInt(hora));
    if(horas.indexOf(horaIn) >= 0 && horas.indexOf(horaOut) >= 0) return this.snack.open('Error, no es posible reservar. El salón está ocupado a las horas que quieres solicitar.', '', {duration: 4000});
    if(horas.indexOf(horaIn) >= 0) return this.snack.open('Error, la hora de entrada está ocupada.', '', {duration: 4000});
    if(horas.indexOf(horaOut) >= 0) return this.snack.open('Error, la hora de salida está ocupada.', '', {duration: 4000});

    let horas_cpu = _.flattenDeep(this.hoursItem);
    horas_cpu = horas_cpu.map(hora => parseInt(hora));
    if(horas_cpu.indexOf(horaIn) >= 0 && horas_cpu.indexOf(horaOut) >= 0) return this.snack.open('Error, no es posible reservar. La máquina está ocupada en las horas que quieres reservar.', '', {duration: 4000});
    if(horas_cpu.indexOf(horaIn) >= 0) return this.snack.open('Error, la hora de entrada está ocupada en la máquina que seleccionaste.', '', {duration: 4000});
    if(horas_cpu.indexOf(horaOut) >= 0) return this.snack.open('Error, la hora de salida está ocupada en la máquina que seleccionaste.', '', {duration: 4000});

    this.loader = true;
    this.back.addReserva(this.auth.user.id, salon, item, horaIn, horaOut).subscribe(
      data => {
        this.loader = false;
        this.dialogRef.close(data);
        this.snack.open('Reserva agregada correctamente.', '', {duration: 3000});
      },
      err => {
        this.loader = false;
        this.snack.open('Error, no se pudo agregar la reserva', '', {duration: 3000});
      }
    );

  }

}
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdDialog } from '@angular/material';
import { routerTransition } from '../../../animations/router.animations';
declare var moment: any;

import { AlumnoReservasAddComponent } from '../alumno-reservas-add/alumno-reservas-add.component';
import { BackServiceService } from '../../../services/back-service.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-alumno-reservas',
  templateUrl: './alumno-reservas.component.html',
  styleUrls: ['./alumno-reservas.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AlumnoReservasComponent implements OnInit {

  private loader: boolean;
  private info: any;
  private allReservas: Array<any>;
  private myReservas: Array<any>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MdDialog,
    private back: BackServiceService,
    private auth: AuthService
  ) {
    this.info = {
      hoy: moment().weekday()
    }
    this.loader = false;
    this.allReservas = [];
    this.myReservas = [];
  }

  openAddReserva() {
    let modal = this.dialog.open(AlumnoReservasAddComponent, {
      width: '50%'
    });
    modal.afterClosed().subscribe(
      data => {
        if(!data) return;
        this.ngOnInit();
      }
    );
  }

  getStyledDay(day: number) : string {
    if(!day) return 'Cargando...';
    let tempDay = 'Cargando...';
    switch (day) {
      case 1:
        tempDay = 'Lunes';
        break;
      case 2:
        tempDay = 'Martes';
        break;
      case 3:
        tempDay = 'Miércoles';
        break;
      case 4:
        tempDay = 'Jueves';
        break;
      case 5:
        tempDay = 'Viernes';
        break;
      case 6:
        tempDay = 'Sabado';
        break;
      case 7:
        tempDay = 'Domingo';
        break;
    
      default:
        tempDay = 'Acabas de inventar un nuevo día.';
        break;
    }
    return tempDay;
  }

  ngOnInit() {
    this.loader = true;
    this.back.getAllReservas().subscribe(
      data => {
        this.allReservas = data;
        this.back.getMyReservas().subscribe(
          data2 => {
            this.myReservas = data2;
            this.loader = false;
          },
          err => {
            this.loader = false;
            this.router.navigate(['../../'], {relativeTo: this.route});    
          }
        );
      },
      err => {
        this.loader = false;
        this.router.navigate(['../../'], {relativeTo: this.route});
      }
    );
  }

}

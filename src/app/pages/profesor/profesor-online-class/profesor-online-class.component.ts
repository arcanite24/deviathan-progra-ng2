import { ProfesorOnlineClassDeleteComponent } from './../profesor-online-class-delete/profesor-online-class-delete.component';
import { ProfesorOnlineClassAddComponent } from './../profesor-online-class-add/profesor-online-class-add.component';
import { Router } from '@angular/router';
import { MdSnackBar, MdDialog } from '@angular/material';
import { BackServiceService } from './../../../services/back-service.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../animations/router.animations';

@Component({
  selector: 'app-profesor-online-class',
  templateUrl: './profesor-online-class.component.html',
  styleUrls: ['./profesor-online-class.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ProfesorOnlineClassComponent implements OnInit {

  private loader: boolean;
  private allClases: any[];

  constructor(
    private back: BackServiceService,
    private snack: MdSnackBar,
    private dialog: MdDialog,
    private router: Router
  ) {
    this.loader = false;
    this.allClases = [];
  }

  ngOnInit() {
    this.loader = true;
    this.back.getAllClasesOnlineProfesor().subscribe(
      data => {
        this.loader = false;
        this.allClases = data;
      },
      err => {
        this.loader = false;
        this.snack.open('Error, no se pudieron cargar todas las clases online.', '', {duration: 4000});
        this.router.navigate(['/']);
      }
    );
  }

  openAddClase() {
    let modal = this.dialog.open(ProfesorOnlineClassAddComponent, {
      width: '60%'
    });
    modal.afterClosed().subscribe(
      data => {
        if(!data) return;
        if(data.err) return this.snack.open(data.err, '', {duration: 4000});
        this.ngOnInit();
      }
    );
  }

  openDeleteClaseOnline(id: string, i: number) {
    let modal = this.dialog.open(ProfesorOnlineClassDeleteComponent, {
      width: '30%',
      data: {id: id}
    });
    modal.afterClosed().subscribe(
      data => {
        if(!data) return;
        if(data.err) return this.snack.open(data.err, '', {duration: 4000});
        this.allClases.splice(i, 1);
      }
    );
  }

}

import { ProfesorTareasDeleteComponent } from './../profesor-tareas-delete/profesor-tareas-delete.component';
import { ProfesorTareasEditComponent } from './../profesor-tareas-edit/profesor-tareas-edit.component';
import { ProfesorTareasAddComponent } from './../profesor-tareas-add/profesor-tareas-add.component';
import { MdSnackBar, MdDialog } from '@angular/material';
import { BackServiceService } from './../../../services/back-service.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../animations/router.animations';

@Component({
  selector: 'app-profesor-tareas',
  templateUrl: './profesor-tareas.component.html',
  styleUrls: ['./profesor-tareas.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ProfesorTareasComponent implements OnInit {

  private loader: boolean;
  private allTareas: any[]

  constructor(
    public back: BackServiceService,
    public snack: MdSnackBar,
    public dialog: MdDialog
  ) {
    this.allTareas = [];
    this.loader = false;
  }

  ngOnInit() {
    this.loader = true;
    this.back.getAllTareasProfesor().subscribe(
      data => {
        this.loader = false;
        this.allTareas = data;
      },
      err => {
        this.loader = false;
        this.snack.open('Error, al cargar las tareas.', '', {duration: 4000});
      }
    );
  }

  openAddTarea() {
    let modal = this.dialog.open(ProfesorTareasAddComponent, {
      width: '50%'
    });
    modal.afterClosed().subscribe(
      data => {
        if(!data) return;
        if(data.err) return;
        this.ngOnInit();
      }
    );
  }

  openEditTarea(id: string) {
    let modal = this.dialog.open(ProfesorTareasEditComponent, {
      width: '50%',
      data: {id: id}
    });
    modal.afterClosed().subscribe(
      data => {
        if(!data) return;
        this.ngOnInit();
      }
    );
  }

  openDeleteTarea(id: string, i: number) {
    let modal = this.dialog.open(ProfesorTareasDeleteComponent, {
      width: '50%',
      data: {id: id}
    });
    modal.afterClosed().subscribe(
      data => {
        if(!data) return;
        if(data.yes) this.allTareas.splice(i, 1);
      }
    );
  }

}

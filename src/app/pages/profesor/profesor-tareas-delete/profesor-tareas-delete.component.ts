import { MdSnackBar } from '@angular/material';
import { BackServiceService } from './../../../services/back-service.service';
import { MdDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesor-tareas-delete',
  templateUrl: './profesor-tareas-delete.component.html',
  styleUrls: ['./profesor-tareas-delete.component.css']
})
export class ProfesorTareasDeleteComponent implements OnInit {

  private loader: boolean;

  constructor(
    public ref: MdDialogRef<ProfesorTareasDeleteComponent>,
    public back: BackServiceService,
    public snack: MdSnackBar
  ) {
    this.loader = false;
  }

  ngOnInit() {
    
  }

  deleteTarea() {
    this.loader = true;
    this.back.deleteTarea(this.ref.config.data.id).subscribe(
      data => {
        this.loader = false;
        this.ref.close({yes: data});
      },
      err => {
        this.loader = false;
        this.snack.open('Error, no se pudo borrar la tarea...', '', {duration: 4000});
      }
    );
  }

}

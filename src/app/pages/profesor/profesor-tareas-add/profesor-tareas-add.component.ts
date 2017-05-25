import { MdSnackBar } from '@angular/material';
import { BackServiceService } from './../../../services/back-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesor-tareas-add',
  templateUrl: './profesor-tareas-add.component.html',
  styleUrls: ['./profesor-tareas-add.component.css']
})
export class ProfesorTareasAddComponent implements OnInit {
  
  private loader: boolean;

  constructor(
    public back: BackServiceService,
    public snack: MdSnackBar
  ) {
    this.loader = false;
  }

  ngOnInit() {
    this.back.getClasesProfesor().subscribe(
      data => {
        console.log(data);
        
        this.loader = false;
      },
      err => {
        this.loader = false;
        this.snack.open('Error, ', '', {duration: 4000});
      }
    );
  }

}

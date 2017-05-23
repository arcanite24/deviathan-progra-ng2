import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../animations/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { BackServiceService } from '../../../services/back-service.service';
import { MdDialog, MdSnackBar } from "@angular/material";

import { AlumnoNotasAddComponent } from "../alumno-notas-add/alumno-notas-add.component";

@Component({
  selector: 'app-alumno-notas',
  templateUrl: './alumno-notas.component.html',
  styleUrls: ['./alumno-notas.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AlumnoNotasComponent implements OnInit {

  private loader: boolean;
  private allNotes: Array<any>;

  constructor(
    public dialog: MdDialog,
    public snack: MdSnackBar,
    public back: BackServiceService
  ) {
    this.loader = false;
    this.allNotes = [];
    this.allNotes = this.allNotes.map(note => {
      let size = this.getTileSize(50, note.text);
      return {
        text: note.text,
        rows: size.rows,
        cols: size.cols
      };
    })
  }

  ngOnInit() {
    this.loader = true;
    this.back.getUserNotes().subscribe(
      data => {
        this.allNotes = data;
        this.loader = false;
      },
      err => {
        this.snack.open('Error, no se pudieron cargar las notas.', '', {duration: 4000});
        this.loader = false;
      }
    );
  }

  openAddNote() {
    let modal = this.dialog.open(AlumnoNotasAddComponent, {
      width: '50%'
    });
    modal.afterClosed().subscribe(
      data => {
        if(!data) return;
        if(data.err) return this.snack.open('Error, no se pudo agregar la nota', '', {duration: 4000});
        this.snack.open('Nota agregada correctamente', '', {duration: 4000});
        let size = this.getTileSize(50, data.text);
        this.allNotes.push({text: data.text, rows: size.rows, cols: size.cols});
      }
    );
  }

  getTileSize(charsPerRow: number, text: string) {
    if(Math.random() >= 0.5) {
      return {
        rows: 1,
        cols: Math.ceil(text.length / charsPerRow)
      };
    } else {
      return {
        rows: Math.ceil(text.length / charsPerRow),
        cols: 1
      };
    } 
  }

}

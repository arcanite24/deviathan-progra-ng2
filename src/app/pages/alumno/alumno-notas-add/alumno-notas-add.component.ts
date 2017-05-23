import { Component, OnInit } from '@angular/core';
import { BackServiceService } from '../../../services/back-service.service';
import { MdDialogRef } from "@angular/material";

@Component({
  selector: 'app-alumno-notas-add',
  templateUrl: './alumno-notas-add.component.html',
  styleUrls: ['./alumno-notas-add.component.css']
})
export class AlumnoNotasAddComponent implements OnInit {

  private addNoteData: any;
  private loader: boolean;

  constructor(
    public back: BackServiceService,
    public dialogRef: MdDialogRef<AlumnoNotasAddComponent>
  ) {
    this.loader = false;
    this.addNoteData = {};
  }

  addNote(text: string) {
    this.loader = true;
    this.back.addNote(text).subscribe(
      data => {
        this.dialogRef.close(data);
        this.loader = false;
      },
      err => {
        this.loader = false;
        this.dialogRef.close({err: err});
      }
    );
  }

  ngOnInit() {

  }

}

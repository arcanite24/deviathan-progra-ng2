import { Component, OnInit } from '@angular/core';
import { BackServiceService } from '../../../services/back-service.service';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-alumno-notas-edit',
  templateUrl: './alumno-notas-edit.component.html',
  styleUrls: ['./alumno-notas-edit.component.css']
})
export class AlumnoNotasEditComponent implements OnInit {

  private loader: boolean;
  private note: any;

  constructor(
    public ref: MdDialogRef<AlumnoNotasEditComponent>,
    public back: BackServiceService
  ) {
    this.loader = false;
    this.note = {};
  }

  ngOnInit() {
    this.loader = false;
    this.back.getNoteDetail(this.ref.config.data.id).subscribe(
      data => {
        this.loader = false;
        this.note = data;
      },
      err => {
        this.ref.close({err: err, msg: 'No se pudo cargar la nota...'});
        this.loader = false;
      }
    );
  }

  editNote(text: string, id: string) {
    this.loader = true;
    this.back.editNote(id, text).subscribe(
      data => {
        this.loader = false;
        this.ref.close(data);
      },
      err => {
        this.ref.close({err: err});
        this.loader = false;
      }
    );
  }

  deleteNote(id: string) {
    this.loader = true;
    this.back.deleteNote(id).subscribe(
      data => {
        this.loader = false;
        this.ref.close({delete: data.id});
      },
      err => {
        this.ref.close({err: err});
        this.loader = false;
      }
    );
  }

}

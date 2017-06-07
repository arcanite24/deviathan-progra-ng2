import { MdDialogRef } from '@angular/material';
import { BackServiceService } from './../../../services/back-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesor-online-class-delete',
  templateUrl: './profesor-online-class-delete.component.html',
  styleUrls: ['./profesor-online-class-delete.component.css']
})
export class ProfesorOnlineClassDeleteComponent implements OnInit {

  private loader: boolean;

  constructor(
    private back: BackServiceService,
    private ref: MdDialogRef<ProfesorOnlineClassDeleteComponent>
  ) {
    this.loader = false;
  }

  ngOnInit() {
  }

  deleteClaseOnline() {
    this.loader = true;
    this.back.deleteClaseOnline(this.ref.config.data.id).subscribe(
      data => {
        this.loader = false;
        this.ref.close(data);
      },
      err => {
        this.loader = false;
        this.ref.close({err: 'No se pudo eliminar la clase online.'});
      }
    );
  }

}

import { MdDialogRef } from '@angular/material';
import { BackServiceService } from './../../../services/back-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-anuncios-delete',
  templateUrl: './admin-anuncios-delete.component.html',
  styleUrls: ['./admin-anuncios-delete.component.css']
})
export class AdminAnunciosDeleteComponent implements OnInit {

  private loader: boolean

  constructor(
    private back: BackServiceService,
    private ref: MdDialogRef<AdminAnunciosDeleteComponent>
  ) {
    this.loader = false;
  }

  ngOnInit() {
  }

  deleteAnuncio() {
    this.loader = true;
    this.back.deleteAnuncio(this.ref.config.data.id).subscribe(
      data => {
        this.loader = false;
        this.ref.close(data);
      },
      err => {
        this.loader = false;
        this.ref.close({err: err});
      }
    );
  }

}

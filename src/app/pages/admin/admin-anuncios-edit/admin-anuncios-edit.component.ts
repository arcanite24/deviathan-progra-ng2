import { MdDialog, MdDialogRef } from '@angular/material';
import { BackServiceService } from './../../../services/back-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-anuncios-edit',
  templateUrl: './admin-anuncios-edit.component.html',
  styleUrls: ['./admin-anuncios-edit.component.css']
})
export class AdminAnunciosEditComponent implements OnInit {

  private anuncio: any;
  private loader: boolean;

  constructor(
    private back: BackServiceService,
    public ref: MdDialogRef<AdminAnunciosEditComponent>
  ) {
    this.loader = false;
    this.anuncio = {}
  }

  ngOnInit() {
    this.loader = true;
    this.back.getAnuncioDetail(this.ref.config.data.id).subscribe(
      data => {
        this.loader = false;
        this.anuncio = data;
      },
      err => {
        this.loader = false;
        this.ref.close({err: err});
      }
    );
  }

  editAnuncio(id: string, text: string, desc: string) {
    this.loader = true;
    this.back.editAnuncio(id, text, desc).subscribe(
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

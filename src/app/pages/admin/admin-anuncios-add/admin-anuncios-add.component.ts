import { BackServiceService } from './../../../services/back-service.service';
import { MdDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-anuncios-add',
  templateUrl: './admin-anuncios-add.component.html',
  styleUrls: ['./admin-anuncios-add.component.css']
})
export class AdminAnunciosAddComponent implements OnInit {

  private addAnuncioData: any;
  private loader: boolean;

  constructor(
    public ref: MdDialogRef<AdminAnunciosAddComponent>,
    private back: BackServiceService
  ) {
    this.addAnuncioData = {}
  }

  ngOnInit() {
  }

  addAnuncio(text: string, title: string) {
    this.loader = true;
    this.back.addAnuncio(text, title).subscribe(
      data => {
        this.loader = false;
        this.ref.close(data);
      },
      err => {
        this.loader = false;
        this.ref.close({err: 'Error, no se pudo agregar el anuncio...'});
      }
    );
  }

}

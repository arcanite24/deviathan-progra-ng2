import { AdminAnunciosDeleteComponent } from './../admin-anuncios-delete/admin-anuncios-delete.component';
import { AdminAnunciosEditComponent } from './../admin-anuncios-edit/admin-anuncios-edit.component';
import { AdminAnunciosAddComponent } from './../admin-anuncios-add/admin-anuncios-add.component';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { BackServiceService } from './../../../services/back-service.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../animations/router.animations';

@Component({
  selector: 'app-admin-anuncios',
  templateUrl: './admin-anuncios.component.html',
  styleUrls: ['./admin-anuncios.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AdminAnunciosComponent implements OnInit {

  private loader: boolean;
  private allAnuncios: any[]

  constructor(
    private back: BackServiceService,
    private snack: MdSnackBar,
    private router: Router,
    private dialog: MdDialog
  ) {
    this.allAnuncios = [];
    this.loader = false;
  }

  ngOnInit() {
    this.loader = true;
    this.back.getAllAnuncios().subscribe(
      data => {
        this.loader = false;
        this.allAnuncios = data;
      },
      err => {
        this.loader = false;
        this.snack.open('Error, no se pudieron cargar los anuncios...', '', {duration: 4000});
        this.router.navigate(['/']);
      }
    );
  }

  openAddAnuncio() {
    let modal = this.dialog.open(AdminAnunciosAddComponent, {
      width: '50%'
    })
    modal.afterClosed().subscribe(
      data => {
        if(!data) return;
        if(data.err) return this.snack.open('Error, no se pudo agregar el anuncio...', '', {duration: 4000});
        this.allAnuncios.push(data);
      }
    );
  }

  openEditAnuncio(id: string) {
    let modal = this.dialog.open(AdminAnunciosEditComponent, {
      width: '50%', data: {id: id}
    })
    modal.afterClosed().subscribe(
      data => {
        if(!data) return;
        if(data.err) return this.snack.open('Error, no se pudo editar el anuncio...', '', {duration: 4000});
        this.ngOnInit();
      }
    );
  }
  
  openDeleteAnuncio(id: string, i: number) {
    let modal = this.dialog.open(AdminAnunciosDeleteComponent, {
      width: '50%', data: {id}
    });
    modal.afterClosed().subscribe(
      data => {
        if(!data) return;
        if(data.err) return this.snack.open('Error, no se pudo eliminar el anuncio...', '', {duration: 4000});
        this.allAnuncios.splice(i, 1);
      }
    );
  }

}

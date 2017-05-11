import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar, MdDialog, MdDialogRef } from '@angular/material';
import { routerTransition } from '../../animations/router.animations';
import { BackServiceService } from '../../services/back-service.service';

@Component({
  selector: 'app-inventario-admin-page',
  templateUrl: './inventario-admin-page.component.html',
  styleUrls: ['./inventario-admin-page.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class InventarioAdminPageComponent implements OnInit {

  private allInventarios: Array<any>;
  private loader: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private back: BackServiceService,
    private snack: MdSnackBar,
    private dialog: MdDialog
  ) {
    this.allInventarios = [];
    this.loader = false;
  }

  ngOnInit() {
    this.loader = true;
    this.back.getAllInventarios().subscribe(
      data => {
        this.allInventarios = data;
        this.loader = false;
      },
      err => {
        this.snack.open('Error, no se pudieron cargar los inventarios', '', {duration: 2000});
        this.router.navigate(['../'], {relativeTo: this.route});
        this.loader = false;
      }
    );
  }

  openAddInventario() {
    let dialog = this.dialog.open(AddInventarioDialog);
    dialog.afterClosed().subscribe(
      data => {
        if(!data) return;
        if(data.err) {
          this.snack.open('Error, no se pudo agregar el salón', '', {duration: 2000});
        } else {
          this.snack.open('Salón agregado correctamente', '', {duration: 2000});
          this.ngOnInit();
        }
      }
    );
  }

  openDeleteInventario(id: string, i: number) {
    let dialog = this.dialog.open(ConfirmDeleteInventarioDialog);
    dialog.afterClosed().subscribe(
      data => {
        if(data) {
          this.loader = true;
          this.back.deleteInventario(id).subscribe(
            data2 => {
              this.allInventarios.splice(i, 1);
              this.snack.open('Salón borrado correctamente', '', {duration: 2000});
              this.loader = false;
            },
            err => {
              this.snack.open('Error, no se pudo borrar el salón', '', {duration: 2000});
              this.loader = false;
            }
          );
        }
      }
    );
  }

  openEditInventario(id: string) {
    let dialog = this.dialog.open(EditInventarioDialog, {
      data: {
        id: id
      }
    });
    dialog.afterClosed().subscribe(
      data => {
        if(!data) return;
        if(data.err) {
          this.snack.open('Error, no se pudo editar el salón', '', {duration: 2000});
        } else {
          this.snack.open('Salón editado correctamente', '', {duration: 2000});
          this.ngOnInit();
        }
      }
    );
  }

}

@Component({
  selector: 'edit-inventario-dialog',
  templateUrl: './edit-inventario-dialog.html'
})
export class EditInventarioDialog implements OnInit {

  private addInventarioData: any;
  private allSalones: Array<any>;

  constructor(
    public dialogRef: MdDialogRef<EditInventarioDialog>,
    private back: BackServiceService
  ) {
    this.addInventarioData = {};
    this.allSalones = [];
  }

  ngOnInit() {
    let id = this.dialogRef.componentInstance.id;
    this.back.getDetailInventario(id).subscribe(
      data => {this.addInventarioData = data; this.addInventarioData.salon = data.salon ? data.salon.id : null},
      err => this.dialogRef.close({err: err})
    );
    this.back.getAllSalones().subscribe(
      data => this.allSalones = data,
      err => this.dialogRef.close({err: err})
    );
  }

  editInventario(salon: any) {
    this.back.editInventario(salon).subscribe(
      data => this.dialogRef.close(data),
      err => this.dialogRef.close({err: err})
    );
  }

}

@Component({
  selector: 'add-inventario-dialog',
  templateUrl: './add-inventario-dialog.html'
})
export class AddInventarioDialog implements OnInit {

  private addInventarioData: any;
  private allSalones: Array<any>;

  constructor(
    public dialogRef: MdDialogRef<AddInventarioDialog>,
    private back: BackServiceService
  ) {
    this.addInventarioData = {};
    this.allSalones = [];
  }

  ngOnInit() {
    this.back.getAllSalones().subscribe(
      data => this.allSalones = data,
      err => this.dialogRef.close({err: err})
    );
  }

  addInventario(nombre: string) {
    this.back.addInventario(nombre).subscribe(
      data => this.dialogRef.close(data),
      err => this.dialogRef.close({err: err})
    );
  }

}

@Component({
  selector: 'confirm-delete-inventario-dialog',
  templateUrl: './confirm-delete-inventario-dialog.html'
})
export class ConfirmDeleteInventarioDialog {
  constructor(public dialogRef: MdDialogRef<ConfirmDeleteInventarioDialog>) {}
}

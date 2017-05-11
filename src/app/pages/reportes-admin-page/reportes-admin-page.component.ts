import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar, MdDialog, MdDialogRef } from '@angular/material';
import { routerTransition } from '../../animations/router.animations';
import { BackServiceService } from '../../services/back-service.service';

@Component({
  selector: 'app-reportes-admin-page',
  templateUrl: './reportes-admin-page.component.html',
  styleUrls: ['./reportes-admin-page.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ReportesAdminPageComponent implements OnInit {

  private allReportes: Array<any>;
  private loader: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private back: BackServiceService,
    private snack: MdSnackBar,
    private dialog: MdDialog
  ) {
    this.allReportes = [];
    this.loader = false;
  }

  ngOnInit() {
    this.loader = true;
    this.back.getAllReportes().subscribe(
      data => {
        this.allReportes = data;
        this.loader = false;
      },
      err => {
        this.snack.open('Error, no se pudieron cargar los reportes', '', {duration: 2000});
        this.router.navigate(['../'], {relativeTo: this.route});
        this.loader = false;
      }
    );
  }

  openAddReporte() {
    let dialog = this.dialog.open(AddReporteDialog);
    dialog.afterClosed().subscribe(
      data => {
        if(!data) return;
        if(data.err) {
          this.snack.open('Error, no se pudo agregar el reporte', '', {duration: 2000});
        } else {
          this.snack.open('Reporte agregado correctamente', '', {duration: 2000});
          this.ngOnInit();
        }
      }
    );
  }

  openDeleteReporte(id: string, i: number) {
    let dialog = this.dialog.open(ConfirmDeleteReporteDialog);
    dialog.afterClosed().subscribe(
      data => {
        if(data) {
          this.loader = true;
          this.back.deleteReporte(id).subscribe(
            data2 => {
              this.allReportes.splice(i, 1);
              this.snack.open('Reporte borrado correctamente', '', {duration: 2000});
              this.loader = false;
            },
            err => {
              this.snack.open('Error, no se pudo borrar el reporte', '', {duration: 2000});
              this.loader = false;
            }
          );
        }
      }
    );
  }

  openEditReporte(id: string) {
    let dialog = this.dialog.open(EditReporteDialog, {
      data: {
        id: id
      }
    });
    dialog.afterClosed().subscribe(
      data => {
        if(!data) return;
        if(data.err) {
          this.snack.open('Error, no se pudo editar el reporte', '', {duration: 2000});
        } else {
          this.snack.open('Reporte editado correctamente', '', {duration: 2000});
          this.ngOnInit();
        }
      }
    );
  }

}

@Component({
  selector: 'edit-reporte-dialog',
  templateUrl: './edit-reporte-dialog.html'
})
export class EditReporteDialog implements OnInit {

  private addReporteData: any;
  private allSalones: Array<any>;

  constructor(
    public dialogRef: MdDialogRef<EditReporteDialog>,
    private back: BackServiceService
  ) {
    this.addReporteData = {};
    this.allSalones = [];
  }

  ngOnInit() {
    let id = this.dialogRef.componentInstance.id;
    this.back.getDetailReporte(id).subscribe(
      data => {this.addReporteData = data; this.addReporteData.salon = data.salon ? data.salon.id : null},
      err => this.dialogRef.close({err: err})
    );
    this.back.getAllSalones().subscribe(
      data => this.allSalones = data,
      err => this.dialogRef.close({err: err})
    );
  }

  editReporte(salon: any) {
    this.back.editReporte(salon).subscribe(
      data => this.dialogRef.close(data),
      err => this.dialogRef.close({err: err})
    );
  }

}

@Component({
  selector: 'add-reporte-dialog',
  templateUrl: './add-reporte-dialog.html'
})
export class AddReporteDialog implements OnInit {

  private addReporteData: any;
  private allSalones: Array<any>;
  private allItems: Array<any>;
  private isAlumno: boolean;

  constructor(
    public dialogRef: MdDialogRef<AddReporteDialog>,
    private back: BackServiceService
  ) {
    this.addReporteData = {};
    this.allSalones = [];
    this.isAlumno = this.dialogRef.componentInstance.isAlumno;
  }

  ngOnInit() {
    this.back.getAllSalones().subscribe(
      data => this.allSalones = data,
      err => this.dialogRef.close({err: err})
    );
    this.back.getAllInventarios().subscribe(
      data => this.allItems = data,
      err => this.dialogRef.close({err: err})
    );
  }

  addReporte(nombre: string) {
    this.back.addReporte(nombre).subscribe(
      data => this.dialogRef.close(data),
      err => this.dialogRef.close({err: err})
    );
  }

}

@Component({
  selector: 'confirm-delete-reporte-dialog',
  templateUrl: './confirm-delete-reporte-dialog.html'
})
export class ConfirmDeleteReporteDialog {
  constructor(public dialogRef: MdDialogRef<ConfirmDeleteReporteDialog>) {}
}

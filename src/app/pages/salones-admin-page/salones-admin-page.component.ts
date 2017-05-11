import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar, MdDialog, MdDialogRef } from '@angular/material';
import { routerTransition } from '../../animations/router.animations';
import { BackServiceService } from '../../services/back-service.service';

@Component({
  selector: 'app-salones-admin-page',
  templateUrl: './salones-admin-page.component.html',
  styleUrls: ['./salones-admin-page.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class SalonesAdminPageComponent implements OnInit {

  private allSalones: Array<any>;
  private loader: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private back: BackServiceService,
    private snack: MdSnackBar,
    private dialog: MdDialog
  ) {
    this.allSalones = [];
    this.loader = false;
  }

  ngOnInit() {
    this.loader = true;
    this.back.getAllSalones().subscribe(
      data => {
        this.allSalones = data;
        this.loader = false;
      },
      err => {
        this.snack.open('Error, no se pudieron cargar los salones', '', {duration: 2000});
        this.router.navigate(['../'], {relativeTo: this.route});
        this.loader = false;
      }
    );
  }

  openAddSalon() {
    let dialog = this.dialog.open(AddSalonDialog);
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

  openDeleteSalon(id: string, i: number) {
    let dialog = this.dialog.open(ConfirmDeleteSalonDialog);
    dialog.afterClosed().subscribe(
      data => {
        if(data) {
          this.loader = true;
          this.back.deleteSalon(id).subscribe(
            data2 => {
              this.allSalones.splice(i, 1);
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

  openEditSalon(id: string) {
    let dialog = this.dialog.open(EditSalonDialog, {
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
  selector: 'edit-salon-dialog',
  templateUrl: './edit-salon-dialog.html'
})
export class EditSalonDialog implements OnInit {

  private addSalonData: any;

  constructor(
    public dialogRef: MdDialogRef<EditSalonDialog>,
    private back: BackServiceService
  ) {
    this.addSalonData = {};
  }

  ngOnInit() {
    let id = this.dialogRef.componentInstance.id;
    this.back.getDetailSalon(id).subscribe(
      data => this.addSalonData = data,
      err => this.dialogRef.close({err: err})
    );
  }

  editSalon(salon: any) {
    this.back.editSalon(salon).subscribe(
      data => this.dialogRef.close(data),
      err => this.dialogRef.close({err: err})
    );
  }

}

@Component({
  selector: 'add-salon-dialog',
  templateUrl: './add-salon-dialog.html'
})
export class AddSalonDialog {

  private addSalonData: any;

  constructor(
    public dialogRef: MdDialogRef<AddSalonDialog>,
    private back: BackServiceService
  ) {
    this.addSalonData = {};
  }

  addSalon(nombre: string) {
    this.back.addSalon(nombre).subscribe(
      data => this.dialogRef.close(data),
      err => this.dialogRef.close({err: err})
    );
  }

}

@Component({
  selector: 'confirm-delete-salon-dialog',
  templateUrl: './confirm-delete-salon-dialog.html'
})
export class ConfirmDeleteSalonDialog {
  constructor(public dialogRef: MdDialogRef<ConfirmDeleteSalonDialog>) {}
}

import { Component, OnInit } from '@angular/core';
import { MdSnackBar, MdDialog, MdDialogRef } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../animations/router.animations';
import { BackServiceService } from '../../services/back-service.service';

@Component({
  selector: 'app-materias-admin-page',
  templateUrl: './materias-admin-page.component.html',
  styleUrls: ['./materias-admin-page.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class MateriasAdminPageComponent implements OnInit {

  private allMaterias: Array<any>;
  private loader: boolean;

  constructor(
    private back: BackServiceService,
    private snack: MdSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MdDialog
  ) {
    this.allMaterias = [];
    this.loader = false;
  }

  goEditarMateria(id: string) {
    this.router.navigate(['/materias/editar', id]);
  }

  openDeleteMateria(id, i) {
    let dialog = this.dialog.open(ConfirmDeleteMateriaDialog);
    dialog.afterClosed().subscribe(
      data => {
        if(data) {
          this.loader = true;
          this.back.deleteMateria(id).subscribe(
            res => {
              this.allMaterias.splice(i, 1);
              this.snack.open('Materia eliminada correctamente', 'X', {duration: 2000});
              this.loader = false;
            },
            err => {
              this.loader = false;
              this.snack.open('Error, no se pudo eliminar la materia', 'X', {duration: 2000});
            }
          );
        }
      }
    );
  }

  ngOnInit() {
    this.loader = true;
    this.back.getAllMaterias().subscribe(
      data => {
        this.allMaterias = data;
        this.loader = false;
      },
      err => {
        this.snack.open('Error, no se pudieron cargar las materias', '', {duration: 2000});
        this.loader = false;
        this.router.navigate(['../'], {relativeTo: this.route});
      }
    );
  }

}

@Component({
  selector: 'confirm-delete-materia-dialog',
  templateUrl: './confirm-delete-materia-dialog.html'
})
export class ConfirmDeleteMateriaDialog {
  constructor(public dialogRef: MdDialogRef<ConfirmDeleteMateriaDialog>) {}
}

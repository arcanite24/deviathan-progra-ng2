import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../animations/router.animations';
import { BackServiceService } from '../../services/back-service.service';
import { MdSnackBar, MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-grupos-admin-page',
  templateUrl: './grupos-admin-page.component.html',
  styleUrls: ['./grupos-admin-page.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class GruposAdminPageComponent implements OnInit {

  private loader: boolean;
  private allGrupos: Array<any>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private back: BackServiceService,
    private snack: MdSnackBar,
    private dialog: MdDialog
  ) {
    this.loader = false;
    this.allGrupos = [];
  }

  ngOnInit() {
    this.loader = true;
    this.back.getAllGrupos().subscribe(
      data => {
        this.loader =  false;
        this.allGrupos = data;
      },
      err => {
        this.loader = false;
        this.snack.open('Error, no se pudieron cargar los grupos', '', {duration: 2000});
        this.router.navigate(['../'], {relativeTo: this.route});
      }
    );
  }

  goEditarGrupo(id: string) {
    this.router.navigate(['/grupos/editar', id]);
  }

  goHorarioGrupo(id: string) {
    this.router.navigate(['/grupos/horario', id]);
  }

  openDeleteGrupo(id, i) {
    let dialog = this.dialog.open(ConfirmDeleteGrupoDialog);
    dialog.afterClosed().subscribe(
      data => {
        if(data) {
          this.loader = true;
          this.back.deleteGrupo(id).subscribe(
            res => {
              this.allGrupos.splice(i, 1);
              this.snack.open('Grupo eliminada correctamente', 'X', {duration: 2000});
              this.loader = false;
            },
            err => {
              this.loader = false;
              this.snack.open('Error, no se pudo eliminar el grpo', 'X', {duration: 2000});
            }
          );
        }
      }
    );
  }

}

@Component({
  selector: 'confirm-delete-grupo-dialog',
  templateUrl: './confirm-delete-grupo-dialog.html'
})
export class ConfirmDeleteGrupoDialog {
  constructor(public dialogRef: MdDialogRef<ConfirmDeleteGrupoDialog>) {}
}

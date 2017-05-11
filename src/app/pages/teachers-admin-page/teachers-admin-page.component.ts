import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { MdSnackBar, MdDialog, MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { BackServiceService } from '../../services/back-service.service';
import { routerTransition, modalTransition } from '../../animations/router.animations';

@Component({
  selector: 'app-teachers-admin-page',
  templateUrl: './teachers-admin-page.component.html',
  styleUrls: ['./teachers-admin-page.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class TeachersAdminPageComponent implements OnInit {

  private allUsers: Array<any>;
  private loader: boolean;

  constructor(private back: BackServiceService, private snack: MdSnackBar, private router: Router, private dialog: MdDialog) {
    this.loader = false;
  }

  goEditarUser(id: string) {
    this.router.navigate(['/maestros/editar', id]);
  }

  openManageGroup(id: string) {
    let dialog = this.dialog.open(UsersManageGroupDialog, {
      data: {
        id: id
      }
    });
    dialog.afterClosed().subscribe(
      data => {
        if(!data) return;
        if(data.err) {
          this.snack.open('Error, no se pudo cambiar el grupo del usuario', '', {duration: 2000});
        } else {
          this.snack.open('Grupo asignado correctamente', '', {duration: 2000});
        }
      }
    );
  }

  openDeleteUser(id: string, i) {
    let dialog = this.dialog.open(ConfirmDeleteTeacherDialog);
    dialog.afterClosed().subscribe(
      data => {
        if(data) {
          this.loader = true;
          this.back.deleteUser(id).subscribe(
            res => {
              this.allUsers.splice(i, 1);
              this.snack.open('Usuario eliminado correctamente', 'X', {duration: 2000});
              this.loader = false;
            },
            err => {
              this.loader = false;
              this.snack.open('Error, no se pudo eliminar el usuario', 'X', {duration: 2000});
            }
          );
        }
      }
    );
  }

  ngOnInit() {
    this.loader = true;
    this.back.getAllUsers().subscribe(
      data => {this.allUsers = data.filter(user => user.roles.indexOf('ROLE_PROFESOR') >= 0); this.loader = false;},
      err => {
        this.loader = false;
        this.snack.open('Error al cargar usuarios...');
        this.router.navigate(['../']);
      }
    );
  }

}

@Component({
  selector: 'confirm-delete-teacher-dialog',
  templateUrl: './confirm-delete-teacher-dialog.html'
})
export class ConfirmDeleteTeacherDialog {
  constructor(public dialogRef: MdDialogRef<ConfirmDeleteTeacherDialog>) {}
}

@Component({
  selector: 'users-manage-group-dialog',
  templateUrl: './users-manage-group-dialog.html'
})
export class UsersManageGroupDialog implements OnInit {

  private id: string;
  private allGrupos: Array<any>;
  private groupData: any;

  constructor(
    public dialogRef: MdDialogRef<UsersManageGroupDialog>,
    private back: BackServiceService
  ) {
    this.id = this.dialogRef.componentInstance.id;
    this.groupData = {};
  }

  ngOnInit() {
    this.back.getAllGrupos().subscribe(
      data => this.allGrupos = data,
      err => this.dialogRef.close()
    );
  }

  changeGroup(grupo: string) {
    this.back.changeUserGroup(this.id, grupo).subscribe(
      data => {
        this.dialogRef.close(data);
      },
      err => {
        this.dialogRef.close({err: err});
      }
    );
  }

}
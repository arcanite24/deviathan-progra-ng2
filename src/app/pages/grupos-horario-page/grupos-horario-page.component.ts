import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar, MdDialog, MdDialogRef } from '@angular/material';
import { routerTransition } from '../../animations/router.animations';
import { BackServiceService } from '../../services/back-service.service';

@Component({
  selector: 'app-grupos-horario-page',
  templateUrl: './grupos-horario-page.component.html',
  styleUrls: ['./grupos-horario-page.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class GruposHorarioPageComponent implements OnInit {

  private loader: boolean;
  private horario: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private back: BackServiceService,
    private snack: MdSnackBar,
    private dialog: MdDialog
  ) {
    this.loader = false;
    this.horario = {};
  }

  ngOnInit() {
    this.loader = true;
    let id = this.route.snapshot.params['id'];
    this.back.getHorario(id).subscribe(
      data => {
        this.horario = data;
        for (var i in this.horario) {
          this.horario[i].sort((a,b) => {
            if (a.inicio < b.inicio) return -1;
            if (a.inicio > b.inicio) return 1;
            return 0;
          });
        }
        this.loader = false;
      },
      err => {
        this.snack.open('Error, no se pudo cargar el horario', '', {duration: 2000});
        this.loader = false;
        this.router.navigate(['../../'], {relativeTo: this.route});
      }
    );
  }

  openAddClase() {
    let id = this.route.snapshot.params['id'];
    let dialog = this.dialog.open(AddMateriaHorarioDialog, {
      data: {
        id: id
      }
    });
    dialog.afterClosed().subscribe(
      data => {
        if(!data) return;
        if(data.err) {
          this.snack.open('Error, no se pudo agregar la clase', '', {duration: 2000});
        } else {
          this.snack.open('Clase agregada correctamente', '', {duration: 2000});
          this.ngOnInit();
        }
      }
    );
  }

  openDetailClase(id: string) {
    let dialog = this.dialog.open(DetailClaseDialog, {
      data: {
        id: id
      }
    });
    dialog.afterClosed().subscribe(
      data => {
        if(!data) return;
        this.ngOnInit();
      }
    );
  }

}

@Component({
  selector: 'add-materia-horario-dialog',
  templateUrl: './add-materia-horario-dialog.html'
})
export class AddMateriaHorarioDialog implements OnInit {

  private addClaseData: any;
  private allMaterias: Array<any>;
  private loader: boolean;
  private horas: Array<string>;
  private allTeachers: Array<any>;

  constructor(
    public dialogRef: MdDialogRef<AddMateriaHorarioDialog>,
    private back: BackServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.addClaseData = {};
    this.horas = [
      '6:00',
      '7:00',
      '8:00',
      '9:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ];
    this.loader = false;
  }

  ngOnInit() {
    this.loader = true;
    this.back.getAllMaterias().subscribe(
      data => {
        this.allMaterias = data;
        this.back.getAllTeachers().subscribe(
          dataTeachers => {
            this.allTeachers = dataTeachers;
            this.loader = false;
          },
          err => {
            this.loader = false;
            this.dialogRef.close({err: err});
          }
        );
      },
      err => {
        this.dialogRef.close({err: err});
      }
    );
  }

  addClase(data: any, teachers: Array<any>) {
    let id = this.dialogRef.config.data.id;
    let teachersId = teachers.filter(teacher => teacher.imparte).map(teacher => teacher.id);
    this.back.addClase(id, data.dia, data.inicio, data.fin, data.materia, teachersId).subscribe(
      res => {
        this.dialogRef.close(res);
      },
      err => {
        this.dialogRef.close({err: err});
      }
    );
  }

}

@Component({
  selector: 'detail-clase-dialog',
  templateUrl: './detail-clase-dialog.html'
})
export class DetailClaseDialog implements OnInit {

  private addClaseData: any;
  private allMaterias: Array<any>;
  private loader: boolean;
  private horas: Array<string>;
  private allTeachers: Array<any>;

  constructor(
    public dialogRef: MdDialogRef<DetailClaseDialog>,
    private back: BackServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private snack: MdSnackBar
  ) {
    this.addClaseData = {};
    this.horas = [
      '6:00',
      '7:00',
      '8:00',
      '9:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ];
    this.loader = false;
  }

  ngOnInit() {
    this.loader = true;
    let id = this.dialogRef.config.data.id;
    this.back.getDetailClase(id).subscribe(
      dataClase => {
        this.addClaseData = dataClase;
        this.addClaseData.materia = dataClase.materia.id;
        this.addClaseData.dia = dataClase.dia.toString();
        this.back.getAllMaterias().subscribe(
          data => {
            this.allMaterias = data;
            this.back.getAllTeachers().subscribe(
              dataTeachers => {
                let teacherList = this.addClaseData.profesores.map(teacher => teacher.id);
                this.allTeachers = dataTeachers.map(teacher => {
                  teacher.imparte = teacherList.indexOf(teacher.id) >= 0;
                  return teacher;
                });
                this.loader = false;
              },
              err => {
                this.loader = false;
                this.dialogRef.close({err: err});
              }
            );
          },
          err => {
            this.dialogRef.close({err: err});
          }
        );
      },
      err => {
        this.dialogRef.close({err: err});
      }
    );
  }

  deleteClase() {
    this.loader = true;
    this.back.deleteClase(this.dialogRef.config.data.id).subscribe(
      data => {
        this.loader = false;
        this.dialogRef.close({mode: 'delete'});
      },
      err => {
        this.loader = false;
        this.snack.open('Error, no se pudo eliminar la clase', '', {duration: 2000});
      }
    );
  }

  editClase(data: any, teachers: Array<any>) {
    data.id = this.dialogRef.config.data.id;
    data.profesores = teachers.filter(teacher => teacher.imparte).map(teacher => teacher.id);
    this.back.editClase(data).subscribe(
      res => {
        this.dialogRef.close(res);
        this.snack.open('Clase editada correctamente', '', {duration: 2000});
      },
      err => {
        this.dialogRef.close({err: err});
        this.snack.open('Error, no se pudo editar la clase', '', {duration: 2000});
      }
    );
  }

}

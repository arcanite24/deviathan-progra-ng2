import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { routerTransition } from '../../animations/router.animations';
import { BackServiceService } from '../../services/back-service.service';

@Component({
  selector: 'app-grupos-edit-page',
  templateUrl: './grupos-edit-page.component.html',
  styleUrls: ['./grupos-edit-page.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class GruposEditPageComponent implements OnInit {

  private loader: boolean;
  private grupo: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private back: BackServiceService,
    private snack: MdSnackBar
  ) {
    this.loader = false;
    this.grupo = {};
  }

  ngOnInit() {
    this.loader = true;
    let id = this.route.snapshot.params['id'];
    this.back.getDetailGrupo(id).subscribe(
      data => {
        this.loader = false;
        this.grupo = data;
      },
      err => {
        this.loader = false;
        this.snack.open('Error, no se pudo cargar el grupo', '', {duration: 2000});
        this.router.navigate(['../../'], {relativeTo: this.route});
      }
    );
  }

  editGrupo(grupo: any) {
    this.loader = true;
    this.back.editGrupo(grupo).subscribe(
      data => {
        this.loader = false;
        this.snack.open('Grupo editado correctamente', '', {duration: 2000});
        this.router.navigate(['../../'], {relativeTo: this.route});
      },
      err => {
        this.loader = false;
        this.snack.open('Error, no se pudo editar el grupo', '', {duration: 2000});
        this.router.navigate(['../../'], {relativeTo: this.route});
      }
    );
  }

}

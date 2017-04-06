import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { routerTransition } from '../../animations/router.animations';
import { BackServiceService } from '../../services/back-service.service';

@Component({
  selector: 'app-grupos-add-page',
  templateUrl: './grupos-add-page.component.html',
  styleUrls: ['./grupos-add-page.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class GruposAddPageComponent {

  private addGrupoData: any;
  private loader: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private back: BackServiceService,
    private snack: MdSnackBar
  ) {
    this.addGrupoData = {};
    this.loader = false;
  }

  addGrupo(data: any) {
    this.loader = true;
    this.back.addGrupo(data.name, data.semestre).subscribe(
      res => {
        this.loader = false;
        this.snack.open('El grupo ' + data.name + ' ha sido agregado correctamente', '', {duration: 2000});
        this.router.navigate(['../'], {relativeTo: this.route});
      },
      err => {
        this.loader = false;
        this.snack.open('Error, no se pudo agregar el grupo', '', {duration: 2000});
      }
    );
  }

}

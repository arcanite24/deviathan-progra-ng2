import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdDialog } from '@angular/material';
import { routerTransition } from '../../../animations/router.animations';
import { BackServiceService } from '../../../services/back-service.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-alumno-horario',
  templateUrl: './alumno-horario.component.html',
  styleUrls: ['./alumno-horario.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AlumnoHorarioComponent implements OnInit {

  private horario: any;
  private loader: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private back: BackServiceService,
    private auth: AuthService,
    private dialog: MdDialog
  ) {
    this.horario = {};
    this.loader = false;
  }

  ngOnInit() {
    this.loader = true;
    this.back.getHorario(this.auth.user.grupo.id).subscribe(
      data => {
        this.horario = data;
        this.loader = false;
      }, err => {
        this.loader = false;
        this.router.navigate(['../../'], {relativeTo: this.route});
      }
    )
  }

}

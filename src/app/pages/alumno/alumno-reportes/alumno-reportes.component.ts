import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar, MdDialog, MdDialogRef } from '@angular/material';
import { AddReporteDialog } from '../../reportes-admin-page/reportes-admin-page.component';
import { routerTransition } from '../../../animations/router.animations';
import { BackServiceService } from '../../../services/back-service.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-alumno-reportes',
  templateUrl: './alumno-reportes.component.html',
  styleUrls: ['./alumno-reportes.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AlumnoReportesComponent implements OnInit {

  private allReportes: Array<any>;
  private loader: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private back: BackServiceService,
    private auth: AuthService,
    private dialog: MdDialog
  ) {
    this.allReportes = [];
    this.loader = false;
  }

  ngOnInit() {
    this.loader = true;
    this.back.getUserReports(this.auth.user.id).subscribe(data => {
      this.allReportes = data;
      this.loader = false;
    }, err => {
      this.loader = false;
      this.router.navigate(['../../',], {relativeTo: this.route});
    });
  }

  openAddReporte() {
    let modal = this.dialog.open(AddReporteDialog, {data: {isAlumno: true}});
    modal.afterClosed().subscribe(data => {
      if(!data) return;
      this.ngOnInit();
    });
  }

}

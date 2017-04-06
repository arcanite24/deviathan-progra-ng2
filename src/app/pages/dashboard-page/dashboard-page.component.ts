import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { routerTransition } from '../../animations/router.animations';
import { BackServiceService } from '../../services/back-service.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class DashboardPageComponent implements OnInit {

  private user: any;
  private adminInfo: any;

  constructor(
    private auth: AuthService,
    private back: BackServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.user = this.auth.user;
    this.adminInfo = {
      users: 0,
      grupos: 0,
      materias: 0
    };
  }

  getStyledRoles(roles: Array<any>) {
    let tempRoles = roles.map(role => {
      if(role == 'ROLE_ADMIN') return 'Administrador';
      if(role == 'ROLE_ALUMNO') return 'Alumno';
      if(role == 'ROLE_PROFE') return 'Profesor';
    });
    return tempRoles.join(', ');
  }

  isRole(role) {
    return this.user.roles.indexOf(role) >= 0;
  }

  logout() {
    this.auth.logout();
    location.reload();
  }

  ngOnInit() {
    this.back.getAdminInfo().subscribe(
      data => this.adminInfo = data,
      err => console.log(err)
    );
  }

}

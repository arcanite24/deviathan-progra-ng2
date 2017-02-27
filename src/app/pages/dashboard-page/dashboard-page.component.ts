import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {

  private user: any;

  constructor(private auth: AuthService) {
    this.user = this.auth.user;
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

}

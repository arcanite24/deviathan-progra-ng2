import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../../animations/router.animations';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ProfilePageComponent implements OnInit {

  private loader: boolean;
  private user: any;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loader = false;
    this.user = {};
  }

  ngOnInit() {
    this.loader = true;
    this.user = this.auth.user;
    console.log(this.user);
    setTimeout(() => this.loader = false, 1000);
  }

  getStyledRoles(roles: Array<any>) {
    let tempRoles = roles.map(role => {
      if(role == 'ROLE_ADMIN') return 'Administrador';
      if(role == 'ROLE_ALUMNO') return 'Alumno';
      if(role == 'ROLE_PROFESOR') return 'Profesor';
    });
    return tempRoles.join(', ');
  }

}

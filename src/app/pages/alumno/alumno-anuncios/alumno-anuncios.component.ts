import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { BackServiceService } from './../../../services/back-service.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../animations/router.animations';

@Component({
  selector: 'app-alumno-anuncios',
  templateUrl: './alumno-anuncios.component.html',
  styleUrls: ['./alumno-anuncios.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AlumnoAnunciosComponent implements OnInit {

  private loader: boolean;
  private allAnuncios: any[];

  constructor(
    private back: BackServiceService,
    private snack: MdSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loader = true;
    this.back.getAllAnuncios().subscribe(
      data => {
        this.loader = false;
        this.allAnuncios = data;
      },
      err => {
        this.loader = false;
        this.snack.open('Error, no se pudieron cargar los anuncios.', '', {duration: 4000});
        this.router.navigate(['/']);
      }
    );
  }

}

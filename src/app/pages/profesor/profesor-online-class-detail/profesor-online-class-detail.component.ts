import { AuthService } from './../../../services/auth.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { BackServiceService } from './../../../services/back-service.service';
import { Component, OnInit, OnDestroy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../../animations/router.animations';

declare var SimpleWebRTC: any;

@Component({
  selector: 'app-profesor-online-class-detail',
  templateUrl: './profesor-online-class-detail.component.html',
  styleUrls: ['./profesor-online-class-detail.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ProfesorOnlineClassDetailComponent implements OnInit, OnDestroy {

  private loader: boolean;
  private id: string;
  private clase: any;

  private allClients: any[];
  private videoList: any[];

  private webrtc: any;

  private sub: any;

  constructor(
    private back: BackServiceService,
    private snack: MdSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private auth: AuthService
  ) {
    this.allClients = [];
    this.videoList = [];

    this.webrtc = new SimpleWebRTC({
      localVideoEl: 'main-video',
      remoteVideosEl: 'remote-videos',
      autoRequestMedia: true
    });

    this.webrtc.on('readyToCall', () => {
      this.webrtc.joinRoom('59382ce038964576097981d1');
    });

    this.router.events.subscribe(
      (val) => {
        if(val instanceof NavigationEnd) {
          
        }
      }
    );
  }

  ngOnInit() {
    this.loader = true;
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.back.getClaseOnlineDetail(this.id).subscribe(
        data => {
          this.loader = false;
          this.clase = data;
        },
        err => {
          this.loader = false;
          this.snack.open('Error, no se pudo cargar la clase online...', '', {duration: 4000});
          this.router.navigate(['/']);
        }
      );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngAfterViewInit() {
    this.initRTC(this.id);
  }

  initRTC(id: string) {



  }

}

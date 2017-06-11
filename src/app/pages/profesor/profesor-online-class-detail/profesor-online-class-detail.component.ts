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
  private msgList: any[];
  private chatInput: string;

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
    this.msgList = [];
    this.chatInput = '';

    this.webrtc = new SimpleWebRTC({
      localVideoEl: 'main-video',
      remoteVideosEl: 'remote-videos',
      autoRequestMedia: true,
      nick: this.auth.user.firstName + ' ' + this.auth.user.lastName
    });

    this.webrtc.on('videoAdded', (video, peer) => {
      this.allClients.push(peer.nick);
    });

    this.webrtc.on('videoRemoved', (video, peer) => {
      this.allClients.splice(this.allClients.indexOf(peer.nick), 1);
    });

    this.webrtc.on('message', (msg) => {
      if(msg.type != 'chat-msg') return;
      msg.payload.isLocal = msg.payload.id == this.auth.user.id;
      this.msgList.push(msg.payload);
    });

    this.webrtc.on('channelMessage', (msg, room, data) => {
      if(data.type != 'chat-msg') return;
      data.payload.isLocal = data.payload.id == this.auth.user.id;
      this.msgList.push(data.payload);
    });

    this.webrtc.on('readyToCall', () => {
      this.webrtc.joinRoom(this.id, (err, desc) => {
        this.snack.open('Unido correctamente a la sala: ' + this.id, '', {duration: 4000});
      });
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
          this.allClients.push(this.auth.user.firstName)
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
    this.webrtc.leaveRoom();
    this.webrtc.stopLocalVideo();
    this.webrtc.disconnect();
  }

  ngAfterViewInit() {
    
  }

  sendMessage(msg: string, e: any) {
    e.preventDefault();
    if(!msg) return;
    if(msg.length <= 0) return;
    this.webrtc.sendDirectlyToAll(this.id, 'chat-msg', {
      text: msg,
      user: this.auth.user.firstName,
      id: this.auth.user.id
    });
    this.msgList.push({
      text: msg,
      user: this.auth.user.firstName,
      id: this.auth.user.id,
      isLocal: true
    });
    this.chatInput = '';
  }

}

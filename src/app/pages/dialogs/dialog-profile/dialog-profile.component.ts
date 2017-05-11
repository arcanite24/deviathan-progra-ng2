import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { BackServiceService } from '../../../services/back-service.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dialog-profile',
  templateUrl: './dialog-profile.component.html',
  styleUrls: ['./dialog-profile.component.css']
})
export class DialogProfileComponent implements OnInit {

  private id: string;
  private user: any;
  private loader: boolean;

  constructor(
    public dialogRef: MdDialogRef<DialogProfileComponent>,
    private back: BackServiceService,
    private auth: AuthService
  ) {
    this.id = this.auth.user.id;
    this.user = {};
    this.loader = false;
  }

  ngOnInit() {
    this.loader = true;
    this.back.getDetailUser(this.id).subscribe(
      data => {
        this.user = data;
        this.loader = false;
      },
      err => {
        this.dialogRef.close();
        this.loader = false;
      }
    );
  }

}

import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase';
// import { Observable } from 'rxjs';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  constructor(public auth: AuthService) { 
    
  }

  logout() {
    this.auth.logout();
  }

}

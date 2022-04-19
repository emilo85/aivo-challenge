import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-logout-auth0',
  templateUrl: './logout-auth0.component.html',
  styleUrls: ['./logout-auth0.component.css']
})
export class LogoutAuth0Component implements OnInit {

  constructor(public auth: AuthService, @Inject(DOCUMENT) private doc: Document) { }

  ngOnInit(): void {
  }

  logout(): void {
     this.auth.logout({ returnTo: this.doc.location.origin });
  }

}

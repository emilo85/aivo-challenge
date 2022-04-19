import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router,private toastr: ToastrService, public auth0: AuthService) { }

  canActivate(): Observable<boolean> | boolean {
    console.log("start")
    return this.auth0.isAuthenticated$.pipe(
      tap(loggedIn => {
        console.log("loggedIn",loggedIn)
        if (!loggedIn) {
          this.toastr.error('Sorry, you must be logged in to see our catalog!', 'Access denied');
          this.router.navigate(['/']);
        }
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: LoginService, public router: Router,private toastr: ToastrService) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.toastr.error('Sorry, you must be logged in to see our catalog!', 'Access denied');
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}

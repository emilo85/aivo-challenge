import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(public loginService: LoginService,private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.email, this.password).subscribe(data => {
      
      if (data.access_token != '') {
        console.log('datos:',data)
        localStorage.setItem('currentUser', JSON.stringify({ token: data.access_token, user: this.email }));        
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let user = currentUser.user.split('@') 
        
        this.toastr.success('Welcome ' + user[0] + ' you are logged in!', 'Login success');
        this.router.navigate(['/home']) 
      }
      
    },
      error => {
        console.log(error)
        this.toastr.error('Username or password is incorrect', 'Login error');
      })
  }

}

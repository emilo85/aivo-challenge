import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.email, this.password).subscribe(data => {
      
      if (data.access_token != '') {
        localStorage.setItem('currentUser', JSON.stringify({ token: data.access_token, user: this.email }));        
      }
      
    },
      error => {
        console.log(error)
      })
  }

}

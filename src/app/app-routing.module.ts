import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVideosComponent } from './components/list-videos/list-videos.component';
import { LoginAuth0Component } from './components/login-auth0/login-auth0.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {path: '', component: LoginAuth0Component},
  {path: 'home', component: ListVideosComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

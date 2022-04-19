import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListVideosComponent } from './components/list-videos/list-videos.component';
import { VideoComponent } from './components/video/video.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import {AuthModule} from '@auth0/auth0-angular';
import { LoginAuth0Component } from './components/login-auth0/login-auth0.component';
import { LogoutAuth0Component } from './components/logout-auth0/logout-auth0.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ListVideosComponent,
    VideoComponent,
    FilterPipe,
    LoginAuth0Component,
    LogoutAuth0Component,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AuthModule.forRoot({
      "domain": "dev-yvbsy7qs.us.auth0.com",
      "clientId": "lzVQv9V5ws8UNcFEXWjdlCLyHLhdYSxG"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

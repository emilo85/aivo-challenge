import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private http: HttpClient) { }

  getVideos(): Observable<any> {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let auth_token = currentUser.token
    
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    })
    return this.http.get<Video[]>(environment.URL_API, { headers: reqHeader })
  }
}

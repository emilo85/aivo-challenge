import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.css']
})
export class ListVideosComponent implements OnInit {
 
  listVideos: Video[] = [];
   
  constructor(public videosService: VideosService) { }

  ngOnInit(): void {
    this.getVideos()
  }

  getVideos() {
    this.videosService.getVideos().subscribe(data => {
      this.listVideos = data;
    },
      error => {
        console.log(error)
      })
  }

}

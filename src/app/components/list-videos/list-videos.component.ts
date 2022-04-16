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
  ordering: string
  filteredString: string = ''
  filter: string


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

  orderVideos() {
    if (this.ordering == '1') {
      let SortedByTitle: Video[] = this.listVideos.sort((a, b) => (a.title < b.title ? -1 : 1));
      this.listVideos = SortedByTitle
    }

    if (this.ordering == '2') {
      let SortedByYear: Video[] = this.listVideos.sort((a, b) => (a.releaseYear < b.releaseYear ? -1 : 1));
      this.listVideos = SortedByYear
    }
  }

  filterByType() {
    this.filteredString = this.filter
  }

  currentYearLong(): number {
    return new Date().getFullYear();
  }

}

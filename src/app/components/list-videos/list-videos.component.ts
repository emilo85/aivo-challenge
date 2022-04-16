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
  filteredYear: string = ''
  filter: string
  filterY: string
  loading: boolean = true;


  constructor(public videosService: VideosService) { }

  ngOnInit(): void {
    this.getVideos()
  }

  getVideos() {
    this.videosService.getVideos().subscribe(data => {
      setTimeout(() => {
        this.listVideos = data;
        this.loading = false
      }, 2000);
    },
      error => {
        console.log(error)
      })
  }

  orderVideos() {
    this.filteredString = '';
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

  filterByYear() {
    this.filteredString = this.filterY
  }

  currentYearLong(): number {
    return new Date().getFullYear();
  }

}
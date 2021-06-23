import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-news-listing',
  templateUrl: './home-news-listing.component.html',
  styleUrls: ['./home-news-listing.component.scss']
})
export class HomeNewsListingComponent implements OnInit {

  news = [
    { id: 1, data: 'data' },
    { id: 2, data: 'data' },
    { id: 3, data: 'data' },
    { id: 4, data: 'data' },
    { id: 5, data: 'data' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

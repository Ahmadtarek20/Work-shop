import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/Models/news';

@Component({
  selector: 'app-home-news-listing',
  templateUrl: './home-news-listing.component.html',
  styleUrls: ['./home-news-listing.component.scss']
})
export class HomeNewsListingComponent implements OnInit {
  @Input() newsList: News[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('Home', this.newsList);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  news = [
    { id: 1, data: 'data' },
    { id: 2, data: 'data' },
    { id: 3, data: 'data' },
    { id: 4, data: 'data' },
    { id: 5, data: 'data' },
    { id: 6, data: 'data' },
    { id: 7, data: 'data' },
    { id: 8, data: 'data' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

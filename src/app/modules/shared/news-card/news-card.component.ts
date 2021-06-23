import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { News } from 'src/app/Models/news';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input() newsItem: News;
  @Output() show = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

  }

  showDetails(newsItem) {
    console.log(newsItem);
    this.show.emit(newsItem);
  }

}

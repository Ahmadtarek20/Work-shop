import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/api/news.service';
import { News } from './../../../Models/news';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  newsItem: News;
  id: Number;
  constructor(
    private newsService: NewsService, private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(prams => {
      this.id = prams.id;
    })
    this.getNewsItem();
  }

  getNewsItem() {
    this.newsService.getNewsItem(Number(this.id)).subscribe(res => {
      this.newsItem = res;
    })
  }

}

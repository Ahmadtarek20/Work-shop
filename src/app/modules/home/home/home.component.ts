import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/api/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newsList = [];
  constructor(
    private newsService: NewsService,
  ) { }

  ngOnInit() {
    this.getNewsList();
  }
  getNewsList() {
    const params = {
      // any prams
    };
    this.newsService.getNewsList(params).subscribe((res: any) => {
      this.newsList = res.articles.filter(el => el.showOnHomepage === true);
    });
  }

}

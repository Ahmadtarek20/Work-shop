import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from './../../../services/api/news.service';
import { CategoriesService } from './../../../services/api/categories.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  newsList = [];
  categoriesList = [];

  constructor(
    private newsService: NewsService,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.getNewsList();
    this.getSourceCategory();
  }
  getNewsList() {
    const params = {
      // any prams
    };
    this.newsService.getNewsList(params).subscribe((res: any) => {
      this.newsList = res.articles;
    });
  }

  getSourceCategory() {
    this.categoriesService.getSourceCategory().subscribe((res: any) => {
      this.categoriesList = res.sourceCategory;
      this.getSourceCateguryNewsList();
    });
  }

  getSourceCateguryNewsList() {
    this.categoriesList.forEach((group) => {
      this.newsList.map((newsItem) => {
        if (newsItem.sourceID == group.id) {
          newsItem.categuryName = group.name;
        }
        return this.newsList;
      });
    });
  }


}

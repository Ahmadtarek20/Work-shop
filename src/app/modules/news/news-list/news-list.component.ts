import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from './../../../services/api/news.service';
import { CategoriesService } from './../../../services/api/categories.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  newsList = [];
  categoriesList = [];

  filterForm = new FormGroup({
    from: new FormControl(null),
    to: new FormControl(null),
    categuryId: new FormControl(null),
    searchInput: new FormControl(null),
  })

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


  onSubmit() {
    let filterData = {
      filter: { ...this.filterForm.value }
    }
    if (filterData.filter.from != null) {
      let newsFilter = this.newsList.filter(item => item.publishedAt == filterData.filter.from);
      this.newsList = newsFilter;
    }
    if (filterData.filter.to != null) {
      let newsFilter = this.newsList.filter(item => item.publishedAt == filterData.filter.to);
      this.newsList = newsFilter;
    }
    if (filterData.filter.categuryId != null) {
      let newsFilter = this.newsList.filter(item => Number(item.sourceID) == filterData.filter.categuryId);
      this.newsList = newsFilter;
      this.newsList = newsFilter;
    }
    if (filterData.filter.searchInput != null) {
      let newsFilter = this.newsList.filter(item => item.title == filterData.filter.searchInput);
      this.newsList = newsFilter;
    }
  }

  resetFilter() {
    location.reload();
  }


}

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
  allNewsList = [];
  categoriesList = [];
  isAscendingSort: boolean = false;
  pageCount = 6;
  pageNumber = 1;
  pages: Number[] = [];


  filterForm = new FormGroup({
    from: new FormControl(null),
    to: new FormControl(null),
    categoryId: new FormControl(null),
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
      this.allNewsList = res.articles;
      this.pagination(this.newsList.length)
    });
  }

  getSourceCategory() {
    this.categoriesService.getSourceCategory().subscribe((res: any) => {
      this.categoriesList = res.sourceCategory;
      this.getSourceCateguryNewsList();
    });
  }

  sort() {
    if (this.isAscendingSort) {
      this.isAscendingSort = !this.isAscendingSort;
      this.newsList.sort(function (a, b) {
        return new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf()
      });
    } else {
      this.isAscendingSort = !this.isAscendingSort;
      this.newsList.sort(function (a, b) {
        return new Date(a.publishedAt).valueOf() - new Date(b.publishedAt).valueOf()
      });
    }
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
      ...this.filterForm.value
    }
    if (filterData.from != null) {
      let newsFilter = this.newsList.filter(item => new Date(item.publishedAt).toDateString() == new Date(filterData.from).toDateString());
      this.newsList = newsFilter;
    }
    if (filterData.to != null) {
      let newsFilter = this.newsList.filter(item => new Date(item.publishedAt).toDateString() == new Date(filterData.to).toDateString());
      this.newsList = newsFilter;
    }
    if (filterData.categoryId != null) {
      let newsFilter = this.newsList.filter(item => Number(item.sourceID) == filterData.categoryId);
      this.newsList = newsFilter;
    }
    if (filterData.searchInput != null) {
      let newsFilter = this.newsList.filter(item => item.title.toLowerCase().includes(filterData.searchInput.toLowerCase()));
      this.newsList = newsFilter;
    }
  }

  resetFilter() {
    Object.keys(this.filterForm.controls).forEach(key => {
      this.filterForm.controls[key].setValue(null);
    });
    this.getNewsList();
  }

  changePage(pageNumber) {
    this.pageNumber = pageNumber;
    if (pageNumber === 1) {
      this.newsList = this.allNewsList.slice(0, this.pageCount);
    } else {
      this.newsList = this.allNewsList.slice((pageNumber - 1) * this.pageCount, this.pageCount * pageNumber);
    }
  }

  pagination(numberOfItems) {
    const numberOfPages = Math.ceil(numberOfItems / this.pageCount);
    this.pages = [];
    for (let index = 0; index < numberOfPages; index++) {
      this.pages.push(index + 1);
    }
    this.newsList = this.allNewsList.slice(0, this.pageCount);
  }

  getCurrentPageItemsForFiltration() {
    if (this.pageNumber === 1) {
      return this.allNewsList.slice(0, this.pageCount);
    } else {
      return this.allNewsList.slice((this.pageNumber - 1) * this.pageCount, this.pageCount * this.pageNumber);
    }
  }



  previousPage() {
    if (this.pageNumber === 1)
      return;
    this.pageNumber--;
    this.changePage(this.pageNumber);
  }
  nextPage() {
    debugger;
    if (this.pageNumber === this.pages.length)
      return;
    this.pageNumber++;
    this.changePage(this.pageNumber);

  }

}

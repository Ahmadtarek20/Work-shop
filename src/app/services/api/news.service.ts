import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Observable, of } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { News } from './../../Models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsItemDetails: BehaviorSubject<News>;

  apiUrl = `e2534d5412765bf36702`;
  constructor(
    private http: HttpClient
  ) {
    this.newsItemDetails = new BehaviorSubject(null);
  }

  getNewsList(params: {} = {}): Observable<any[]> {
    return this.http.get<any[]>(baseUrl + this.apiUrl, { params: { ...params } });
  }

  getNewsItem(newsId): BehaviorSubject<News> {
    if (this.newsItemDetails.value) {
      return this.newsItemDetails
    } else {
      this.getNewsList().subscribe((res: any) => {
        let item = res.articles.find(n => n.id == newsId);
        this.newsItemDetails.next(item);
        return this.newsItemDetails;
      })
    }
    return this.newsItemDetails;
  }
  setNewsItem(newsItem: News) {
    this.newsItemDetails.next(newsItem);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiUrl = `e2534d5412765bf36702`;
  constructor(
    private http: HttpClient
  ) {
  }

  getNewsList(params: {} = {}): Observable<any> {
    return this.http.get(baseUrl + this.apiUrl, { params: { ...params } });
  }
}

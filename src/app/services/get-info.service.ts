import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

  private newsSubject = new BehaviorSubject([]);

  get news$(): Observable<any[]> {
    return this.newsSubject.asObservable();
  }

  constructor(private http: HttpClient) { }

  getNewsFromApi(pageSize, category?) {
    this.http.get('https://newsapi.org/v2/top-headlines?pageSize=' + pageSize + '&category=' + category +
    '&apiKey=52b388a921624383a19131605b5f1bfc').subscribe((news) => {
      this.newsSubject.next(news.articles);
    });
  }

}

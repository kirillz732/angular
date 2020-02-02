import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {
  News ;

  constructor(private http: HttpClient) { }

  getNewsFromApi(pageSize, category?) {
    this.http.get('https://newsapi.org/v2/top-headlines?pageSize=' + pageSize + '&category=' + category +
    '&apiKey=52b388a921624383a19131605b5f1bfc').subscribe( news => {
      this.News = news;
    });
    return this.News.articles;
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetOneNewsService {

  constructor() { }

  news;

  setNews(getNews) {
    this.news = getNews;
  }

  getNews() {
    return this.news;
  }
}

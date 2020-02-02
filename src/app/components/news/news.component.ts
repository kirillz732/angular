import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetInfoService } from '../../services/get-info.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(
    private router: Router,
    private getInfoService: GetInfoService,
  ) {
  }

  source;
  pageSize = 10;
  arrOfNews = [];

  ngOnInit() {
  }

  addArticle() {
    this.router.navigate(['/add']);
  }

  selectSource(event) {
    this.pageSize = 10;
    this.source = event.value;
    this.arrOfNews = this.getInfoService.getNewsFromApi(5, this.source);
  }

  edit() {
    this.router.navigate(['/add']);
  }

  newsDetails() {
     this.router.navigate(['/news-details']);
  }

  loadMore() {
    this.arrOfNews = this.getInfoService.getNewsFromApi(this.pageSize, this.source);
    this.pageSize = this.pageSize + 5;
  }
}

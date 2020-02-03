import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetOneNewsService } from '../../services/get-one-news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  constructor(
    private router: Router,
    private getOneNewsService: GetOneNewsService
  ) {
  }

  news;

  ngOnInit() {
    this.news = this.getOneNewsService.getNews();
  }

  edit() {
    this.router.navigate(['/add']);
  }
}

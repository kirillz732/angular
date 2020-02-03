import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetOneNewsService } from '../../services/get-one-news.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './addArticle.component.html',
  styleUrls: ['./addArticle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddArticleComponent implements OnInit {

  news = {
    title: '',
    description: '',
    content: '',
    urlToImage: '',
    publishedAt: '',
    author: '',
    url: '',
  };

  constructor(
    private router: Router,
    private getOneNewsService: GetOneNewsService
  ) {
  }

  ngOnInit() {
    this.news = this.getOneNewsService.getNews();
  }

  goHome() {
    this.router.navigate(['/main']);
  }

  save() {
    console.log(this.news);
    console.log('save info');
  }
}

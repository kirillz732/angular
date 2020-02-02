import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './addArticle.component.html',
  styleUrls: ['./addArticle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddArticleComponent implements OnInit {

  news = {
    heading: '',
    description: '',
    content: '',
    image: '',
    date: '',
    author: '',
    url: '',
  };

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['/main']);
  }

  save() {
    console.log(this.news);
    console.log('save info');
  }
}

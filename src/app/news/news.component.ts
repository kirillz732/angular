import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  edit() {
    this.router.navigate(['/add']);
  }

  newsDetails() {
    this.router.navigate(['/news-details']);
  }
}

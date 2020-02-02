import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  edit() {
    this.router.navigate(['/add']);
  }
}

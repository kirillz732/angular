import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) {
  }

  arrayOfNews = [
    {value: 1, name: 'BBS'},
    {value: 2, name: 'CDN'},
    {value: 3, name: 'MY'},
  ];

  ngOnInit() {
  }

  addArticle() {
    this.router.navigate(['/add']);
  }
}

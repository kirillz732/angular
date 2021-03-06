import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetInfoService } from '../../services/get-info.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    private router: Router,
    private getInfoService: GetInfoService
  ) {
  }

  source = 'technology';

  addArticle() {
    this.router.navigate(['/add']);
  }

  selectSource(event) {
    this.source = event.value;
    this.getInfoService.getNewsFromApi(5, this.source);
  }
}

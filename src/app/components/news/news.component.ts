import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GetInfoService } from '../../services/get-info.service';
import { GetOneNewsService } from '../../services/get-one-news.service';
import { ComponentDirective } from '../../directives/component.directive';
import { ArticleComponent } from '../article/article.component';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @ViewChild(ComponentDirective, { static: true }) componentHost: ComponentDirective;

  constructor(
    private router: Router,
    private getInfoService: GetInfoService,
    private getOneNewsService: GetOneNewsService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  source = 'technology';
  pageSize = 10;
  arrOfNews = [];

  ngOnInit() {
    this.getInfoService.getNewsFromApi(5, this.source);
    this.getInfoService.news$.subscribe(news => {
      this.arrOfNews = news;
      this.componentHost.viewContainerRef.clear();
      this.arrOfNews.forEach((item) => {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ArticleComponent);
        const componentRef = this.componentHost.viewContainerRef.createComponent(componentFactory);
        componentRef.instance.news = item;
        componentRef.instance.isMyNews = false;

        const sub = new Subscription();
        sub.add(componentRef.instance.edit.subscribe(newsEdit => this.edit(newsEdit)));
        sub.add(componentRef.instance.details.subscribe(newsDetails => this.newsDetails(newsDetails)));
        componentRef.instance.destroy.pipe(first()).subscribe(() => sub.unsubscribe());
      });
    });
    this.getOneNewsService.setNews('');
  }


  loadMore() {
    this.getInfoService.getNewsFromApi(this.pageSize, this.source);
    this.pageSize = this.pageSize + 5;
  }

  edit(news) {
    this.getOneNewsService.setNews(news);
    this.router.navigate(['/add']);
  }

  newsDetails(news) {
    this.getOneNewsService.setNews(news);
    this.router.navigate(['/news-details']);
  }
}

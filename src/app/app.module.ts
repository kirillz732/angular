import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddArticleComponent } from './components/add-article/addArticle.component';
import { MenuComponent } from './components/menu/menu.component';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/typings/select';
import { MatButtonModule } from '@angular/material/typings/esm5/button';
import { MatCheckboxModule } from '@angular/material/typings/checkbox';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
import { TitleComponent } from './components/title/title.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './components/article/article.component';
import { ComponentDirective } from './directives/component.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AddArticleComponent,
    NotFoundComponent,
    MenuComponent,
    NewsComponent,
    NewsDetailsComponent,
    TitleComponent,
    ArticleComponent,
    ComponentDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    TitleComponent,
    ArticleComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const element = createCustomElement(TitleComponent, { injector });
    customElements.define('app-title', element);
  }
  ngDoBootstrap() {
  }
}


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainComponent } from './components/main/main.component';
import { AddArticleComponent } from './components/add-article/addArticle.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';


const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'add', component: AddArticleComponent},
  {path: '404', component: NotFoundComponent},
  {path: 'news-details', component: NewsDetailsComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '**', redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

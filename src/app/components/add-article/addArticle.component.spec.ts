import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddArticleComponent } from './addArticle.component';
import { MatFormField } from '@angular/material';
import { FormsModule } from '@angular/forms';



describe('AddArticleComponent', () => {
  let component: AddArticleComponent;
  let fixture: ComponentFixture<AddArticleComponent>;
  const news = {
    title: 'some title',
    description: 'some title',
    content: 'some title',
    urlToImage: 'some title',
    publishedAt: '1190-11-12',
    author: 'some title',
    url: 'some title',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [
        AddArticleComponent,
        MatFormField,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArticleComponent);
    component = fixture.componentInstance;
    component.news = news;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

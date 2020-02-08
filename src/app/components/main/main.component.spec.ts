import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { NewsComponent } from '../news/news.component';
import { TitleComponent } from '../title/title.component';
import { MenuComponent } from '../menu/menu.component';
import {
  MatCheckbox,
  MatDialogModule,
  MatFormField,
  MatLabel,
  MatOption,
  MatPseudoCheckbox,
  MatRippleModule,
  MatSelect
} from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { ObserversModule } from '@angular/cdk/observers';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        OverlayModule,
        MatRippleModule,
        ObserversModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatDialogModule,
      ],
      declarations: [
        MainComponent,
        NewsComponent,
        TitleComponent,
        MenuComponent,
        MatLabel,
        MatSelect,
        MatOption,
        MatFormField,
        MatCheckbox,
        MatPseudoCheckbox,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';
import { MenuComponent } from '../menu/menu.component';
import { TitleComponent } from '../title/title.component';
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

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

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
      declarations: [ NewsComponent,
        MenuComponent,
        TitleComponent,
        MatLabel,
        MatSelect,
        MatOption,
        MatFormField,
        MatCheckbox,
        MatPseudoCheckbox
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

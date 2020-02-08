import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
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

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  const source = 'source';

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
      declarations: [ MenuComponent,
        MatLabel,
        MatOption,
        MatSelect,
        MatFormField,
        MatCheckbox,
        MatPseudoCheckbox,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    component.source = source;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

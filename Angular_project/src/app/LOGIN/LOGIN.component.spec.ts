/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LOGINComponent } from './LOGIN.component';

describe('LOGINComponent', () => {
  let component: LOGINComponent;
  let fixture: ComponentFixture<LOGINComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LOGINComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LOGINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { REGITERComponent } from './REGITER.component';

describe('REGITERComponent', () => {
  let component: REGITERComponent;
  let fixture: ComponentFixture<REGITERComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ REGITERComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(REGITERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

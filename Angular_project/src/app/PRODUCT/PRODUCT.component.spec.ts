/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PRODUCTComponent } from './PRODUCT.component';

describe('PRODUCTComponent', () => {
  let component: PRODUCTComponent;
  let fixture: ComponentFixture<PRODUCTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRODUCTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRODUCTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

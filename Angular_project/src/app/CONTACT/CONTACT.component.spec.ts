/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CONTACTComponent } from './CONTACT.component';

describe('CONTACTComponent', () => {
  let component: CONTACTComponent;
  let fixture: ComponentFixture<CONTACTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CONTACTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CONTACTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

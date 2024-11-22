/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HOMEComponent } from './HOME.component';

describe('HOMEComponent', () => {
  let component: HOMEComponent;
  let fixture: ComponentFixture<HOMEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HOMEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HOMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

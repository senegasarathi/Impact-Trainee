/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SERVICEComponent } from './SERVICE.component';

describe('SERVICEComponent', () => {
  let component: SERVICEComponent;
  let fixture: ComponentFixture<SERVICEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SERVICEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SERVICEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

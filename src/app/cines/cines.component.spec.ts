/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CinesComponent } from './cines.component';

describe('CinesComponent', () => {
  let component: CinesComponent;
  let fixture: ComponentFixture<CinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

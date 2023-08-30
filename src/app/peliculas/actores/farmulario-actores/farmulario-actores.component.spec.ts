/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FarmularioActoresComponent } from './farmulario-actores.component';

describe('FarmularioActoresComponent', () => {
  let component: FarmularioActoresComponent;
  let fixture: ComponentFixture<FarmularioActoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmularioActoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmularioActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

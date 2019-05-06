import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPacientePage } from './info-paciente.page';

describe('InfoPacientePage', () => {
  let component: InfoPacientePage;
  let fixture: ComponentFixture<InfoPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPacientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

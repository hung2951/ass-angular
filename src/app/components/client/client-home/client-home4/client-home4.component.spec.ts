import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHome4Component } from './client-home4.component';

describe('ClientHome4Component', () => {
  let component: ClientHome4Component;
  let fixture: ComponentFixture<ClientHome4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientHome4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientHome4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

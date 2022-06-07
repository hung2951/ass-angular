import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHome1Component } from './client-home1.component';

describe('ClientHome1Component', () => {
  let component: ClientHome1Component;
  let fixture: ComponentFixture<ClientHome1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientHome1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientHome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

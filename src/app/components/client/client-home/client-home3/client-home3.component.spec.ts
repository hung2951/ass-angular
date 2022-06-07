import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHome3Component } from './client-home3.component';

describe('ClientHome3Component', () => {
  let component: ClientHome3Component;
  let fixture: ComponentFixture<ClientHome3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientHome3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientHome3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHome2Component } from './client-home2.component';

describe('ClientHome2Component', () => {
  let component: ClientHome2Component;
  let fixture: ComponentFixture<ClientHome2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientHome2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientHome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

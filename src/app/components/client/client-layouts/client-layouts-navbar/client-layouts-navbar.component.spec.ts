import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLayoutsNavbarComponent } from './client-layouts-navbar.component';

describe('ClientLayoutsNavbarComponent', () => {
  let component: ClientLayoutsNavbarComponent;
  let fixture: ComponentFixture<ClientLayoutsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLayoutsNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLayoutsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

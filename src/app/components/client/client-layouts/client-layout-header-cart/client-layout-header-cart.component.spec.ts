import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLayoutHeaderCartComponent } from './client-layout-header-cart.component';

describe('ClientLayoutHeaderCartComponent', () => {
  let component: ClientLayoutHeaderCartComponent;
  let fixture: ComponentFixture<ClientLayoutHeaderCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLayoutHeaderCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLayoutHeaderCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

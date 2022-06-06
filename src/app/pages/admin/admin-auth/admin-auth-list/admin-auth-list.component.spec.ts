import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuthListComponent } from './admin-auth-list.component';

describe('AdminAuthListComponent', () => {
  let component: AdminAuthListComponent;
  let fixture: ComponentFixture<AdminAuthListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAuthListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAuthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailCmtComponent } from './client-detail-cmt.component';

describe('ClientDetailCmtComponent', () => {
  let component: ClientDetailCmtComponent;
  let fixture: ComponentFixture<ClientDetailCmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDetailCmtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailCmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

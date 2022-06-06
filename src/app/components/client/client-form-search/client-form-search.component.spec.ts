import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormSearchComponent } from './client-form-search.component';

describe('ClientFormSearchComponent', () => {
  let component: ClientFormSearchComponent;
  let fixture: ComponentFixture<ClientFormSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFormSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFormSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHeroComponent } from './client-hero.component';

describe('ClientHeroComponent', () => {
  let component: ClientHeroComponent;
  let fixture: ComponentFixture<ClientHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoDetailComponent } from './perso-detail.component';

describe('PersoDetailComponent', () => {
  let component: PersoDetailComponent;
  let fixture: ComponentFixture<PersoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

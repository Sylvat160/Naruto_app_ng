import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoListComponent } from './perso-list.component';

describe('PersoListComponent', () => {
  let component: PersoListComponent;
  let fixture: ComponentFixture<PersoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

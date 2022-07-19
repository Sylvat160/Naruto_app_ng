import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersoComponent } from './add-perso.component';

describe('AddPersoComponent', () => {
  let component: AddPersoComponent;
  let fixture: ComponentFixture<AddPersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPersoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

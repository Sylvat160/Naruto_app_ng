import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersoComponent } from './edit-perso.component';

describe('EditPersoComponent', () => {
  let component: EditPersoComponent;
  let fixture: ComponentFixture<EditPersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPersoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

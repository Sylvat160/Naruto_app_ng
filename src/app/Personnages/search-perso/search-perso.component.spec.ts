import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPersoComponent } from './search-perso.component';

describe('SearchPersoComponent', () => {
  let component: SearchPersoComponent;
  let fixture: ComponentFixture<SearchPersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPersoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

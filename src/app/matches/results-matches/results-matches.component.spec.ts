import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsMatchesComponent } from './results-matches.component';

describe('ResultsMatchesComponent', () => {
  let component: ResultsMatchesComponent;
  let fixture: ComponentFixture<ResultsMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsMatchesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

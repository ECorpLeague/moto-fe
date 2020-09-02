import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultMatchComponent } from './result-match.component';

describe('ResultMatchComponent', () => {
  let component: ResultMatchComponent;
  let fixture: ComponentFixture<ResultMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultMatchComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesColumnComponent } from './matches-column.component';

describe('MatchesColumnComponent', () => {
  let component: MatchesColumnComponent;
  let fixture: ComponentFixture<MatchesColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatchesColumnComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

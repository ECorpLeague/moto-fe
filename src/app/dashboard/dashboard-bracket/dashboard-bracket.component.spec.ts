import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBracketComponent } from './dashboard-bracket.component';

describe('DashboardBracketComponent', () => {
  let component: DashboardBracketComponent;
  let fixture: ComponentFixture<DashboardBracketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardBracketComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBracketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

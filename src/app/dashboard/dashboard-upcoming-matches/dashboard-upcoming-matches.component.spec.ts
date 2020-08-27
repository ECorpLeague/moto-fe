import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMatchesComponent } from './dashboard-upcoming-matches.component';

describe('DashboardMatchesComponent', () => {
  let component: DashboardMatchesComponent;
  let fixture: ComponentFixture<DashboardMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardMatchesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

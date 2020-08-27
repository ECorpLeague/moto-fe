import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResultsComponent } from './dashboard-results.component';

describe('DashboardResultsComponent', () => {
  let component: DashboardResultsComponent;
  let fixture: ComponentFixture<DashboardResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardResultsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

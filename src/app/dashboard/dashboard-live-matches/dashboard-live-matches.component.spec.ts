import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLiveMatchesComponent } from './dashboard-live-matches.component';

describe('DashboardLiveMatchesComponent', () => {
  let component: DashboardLiveMatchesComponent;
  let fixture: ComponentFixture<DashboardLiveMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardLiveMatchesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLiveMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

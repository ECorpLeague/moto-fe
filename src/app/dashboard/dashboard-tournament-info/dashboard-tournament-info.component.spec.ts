import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTournamentInfoComponent } from './dashboard-tournament-info.component';

describe('DashboardTournamentInfoComponent', () => {
  let component: DashboardTournamentInfoComponent;
  let fixture: ComponentFixture<DashboardTournamentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardTournamentInfoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTournamentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

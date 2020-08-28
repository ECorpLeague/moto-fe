import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBracketBlockTeamComponent } from './dashboard-bracket-block-team.component';

describe('DashboardBracketBlockTeamComponent', () => {
  let component: DashboardBracketBlockTeamComponent;
  let fixture: ComponentFixture<DashboardBracketBlockTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardBracketBlockTeamComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBracketBlockTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

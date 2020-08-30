import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMatchComponent } from './dashboard-upcoming-match.component';

describe('DashboardMatchComponent', () => {
  let component: DashboardMatchComponent;
  let fixture: ComponentFixture<DashboardMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardMatchComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

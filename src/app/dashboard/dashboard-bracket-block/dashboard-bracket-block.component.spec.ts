import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBracketBlockComponent } from './dashboard-bracket-block.component';

describe('DashboardBracketBlockComponent', () => {
  let component: DashboardBracketBlockComponent;
  let fixture: ComponentFixture<DashboardBracketBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardBracketBlockComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBracketBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

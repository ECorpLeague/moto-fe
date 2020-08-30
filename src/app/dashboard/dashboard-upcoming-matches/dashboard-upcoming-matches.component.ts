import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard-upcoming-matches',
  template: `
    <app-title-label [title]="'Upcoming matches'"></app-title-label>
    <app-dashboard-upcoming-match
      *ngFor="let i of [1, 2, 3, 4]"
    ></app-dashboard-upcoming-match>
  `,
  styleUrls: ['./dashboard-upcoming-matches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardUpcomingMatchesComponent {}

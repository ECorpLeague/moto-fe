import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard-live-matches',
  template: `
    <app-title-label [title]="'Live'"></app-title-label>
    <app-dashboard-upcoming-match
      *ngFor="let i of [1]"
    ></app-dashboard-upcoming-match>
  `,
  styleUrls: ['./dashboard-live-matches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardLiveMatchesComponent {}

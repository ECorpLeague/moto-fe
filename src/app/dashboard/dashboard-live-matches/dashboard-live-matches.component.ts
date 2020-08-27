import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard-live-matches',
  template: `
    <app-title-label [title]="'Live'"></app-title-label>
    <app-match-label *ngFor="let i of [1]"
      ><app-match-label> </app-match-label
    ></app-match-label>
  `,
  styleUrls: ['./dashboard-live-matches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardLiveMatchesComponent {}

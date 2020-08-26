import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard-matches',
  template: `
    <app-title-label></app-title-label>
    <app-match-label *ngFor="let i of [1, 2, 3, 4]"
      ><app-match-label> </app-match-label
    ></app-match-label>
  `,
  styleUrls: ['./dashboard-matches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardMatchesComponent {}

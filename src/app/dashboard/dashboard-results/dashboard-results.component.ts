import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard-results',
  template: `
    <app-title-label [title]="'Results'"></app-title-label>
    <app-match-label *ngFor="let i of [1, 2, 3, 4]"
      ><app-match-label> </app-match-label
    ></app-match-label>
  `,
  styleUrls: ['./dashboard-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardResultsComponent {}

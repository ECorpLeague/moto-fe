import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DashboardFacade } from 'src/app/dashboard/+state/dashboard.facade';

@Component({
  selector: 'app-matches-column',
  template: `
    <app-live-matches></app-live-matches>
    <app-upcoming-matches class="upcoming-matches"></app-upcoming-matches>
    <app-results-matches
      [matches]="(dashboardFacade.results$ | async)!"
    ></app-results-matches>
  `,
  styleUrls: ['./matches-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchesColumnComponent {
  constructor(public dashboardFacade: DashboardFacade) {}
}

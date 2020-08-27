import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  template: `
    <div class="bracket">
      <app-dashboard-bracket></app-dashboard-bracket>
    </div>
    <div class="matches">
      <app-dashboard-live-matches></app-dashboard-live-matches>
      <app-dashboard-upcoming-matches
        class="upcoming-matches"
      ></app-dashboard-upcoming-matches>
      <app-dashboard-results></app-dashboard-results>
    </div>
  `,
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent {}

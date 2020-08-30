import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard-upcoming-match',
  template: `
    <div class="team">team #1</div>
    <div class="date">
      <div>25/08</div>
      <div>21:00</div>
    </div>
    <div class="team">team #2</div>
  `,
  styleUrls: ['./dashboard-upcoming-match.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardUpcomingMatchComponent {}

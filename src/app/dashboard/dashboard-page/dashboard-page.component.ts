import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  template: `
    <div class="bracket"></div>
    <app-dashboard-matches class="matches"></app-dashboard-matches>
    <div class="results"></div>
  `,
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent {}

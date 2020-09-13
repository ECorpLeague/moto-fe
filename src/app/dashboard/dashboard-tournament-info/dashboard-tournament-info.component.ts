import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-tournament-info',
  template: `
    <div>
      <app-title-label
        [title]="'DASHBOARD.TOURNAMENT' | transloco"
      ></app-title-label>
      <p>{{ name }}</p>
    </div>
    <div>
      <app-title-label [title]="'DASHBOARD.START_DATE' | transloco">
      </app-title-label>
      <p>{{ startDate }}</p>
    </div>
  `,
  styleUrls: ['./dashboard-tournament-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardTournamentInfoComponent {
  @Input() name: string;
  @Input() startDate: string;
}

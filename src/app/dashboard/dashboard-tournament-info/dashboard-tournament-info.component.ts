import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard-tournament-info',
  template: `
    <div>
      <app-title-label [title]="'Tournament'"></app-title-label>
      <p>Motoliga Sezon 5</p>
    </div>
    <div>
      <app-title-label [title]="'Start date'"> </app-title-label>
      <p>27.05.04</p>
    </div>
    <div>
      <app-title-label [title]="'Teams count'"> </app-title-label>
      <p>8</p>
    </div>
  `,
  styleUrls: ['./dashboard-tournament-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardTournamentInfoComponent {}

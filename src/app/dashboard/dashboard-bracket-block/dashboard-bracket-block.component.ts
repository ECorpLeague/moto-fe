import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BracketMatch } from '../+state/dashboard.model';

@Component({
  selector: 'app-dashboard-bracket-block',
  template: `
    <app-dashboard-bracket-block-team
      [team]="match.firstTeam"
    ></app-dashboard-bracket-block-team>
    <app-dashboard-bracket-block-team
      [team]="match.secondTeam"
    ></app-dashboard-bracket-block-team>
  `,
  styleUrls: ['./dashboard-bracket-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardBracketBlockComponent {
  @Input() match: BracketMatch;
}

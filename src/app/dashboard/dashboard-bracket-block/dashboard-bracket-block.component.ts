import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BracketMatch } from '../+state/dashboard.model';
import { isLoser } from '../+state/utilities';

@Component({
  selector: 'app-dashboard-bracket-block',
  template: `
    <app-dashboard-team
      [team]="match.firstTeam"
      [isLoser]="isLoser(match.firstTeam, match)"
    ></app-dashboard-team>
    <app-dashboard-team
      [team]="match.secondTeam"
      [isLoser]="isLoser(match.secondTeam, match)"
    ></app-dashboard-team>
  `,
  styleUrls: ['./dashboard-bracket-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardBracketBlockComponent {
  isLoser = isLoser;
  @Input() match: BracketMatch;
}

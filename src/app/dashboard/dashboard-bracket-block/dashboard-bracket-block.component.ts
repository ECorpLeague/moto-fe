import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BracketMatch } from '../+state/dashboard.model';
import { isLoser } from '../+state/utilities';

@Component({
  selector: 'app-dashboard-bracket-block',
  template: `
    <app-team-block
      [team]="match.firstTeam"
      [isLoser]="isLoser(match.firstTeam, match)"
    ></app-team-block>
    <app-team-block
      [team]="match.secondTeam"
      [isLoser]="isLoser(match.secondTeam, match)"
    ></app-team-block>
  `,
  styleUrls: ['./dashboard-bracket-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardBracketBlockComponent {
  isLoser = isLoser;
  @Input() match: BracketMatch;
}

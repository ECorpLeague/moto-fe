import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { isLoser } from '../../dashboard/+state/dashboard.utilities';
import { BracketMatch } from '../../dashboard/+state/dashboard.model';

@Component({
  selector: 'app-result-match',
  template: `
    <app-team-block
      [team]="match.firstTeam"
      [isLoser]="isLoser(match.firstTeam, match)"
    ></app-team-block>
    <app-team-block
      class="second-team"
      [team]="match.secondTeam"
      [isLoser]="isLoser(match.secondTeam, match)"
    ></app-team-block>
  `,
  styleUrls: ['./result-match.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultMatchComponent {
  isLoser = isLoser;
  @Input() match: BracketMatch;
}

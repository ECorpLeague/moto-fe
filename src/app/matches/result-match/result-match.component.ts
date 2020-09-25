import { Component, ChangeDetectionStrategy } from '@angular/core';
import { isLoser } from 'src/app/dashboard/+state/utilities';
import { BestOf } from 'src/app/dashboard/+state/dashboard.model';

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
  match = {
    id: 1,
    firstTeam: {
      id: 1,
      name: 'xd',
      score: 2
    },
    secondTeam: {
      id: 2,
      name: 'lol',
      score: 1
    },
    bo: BestOf.three
  };
}

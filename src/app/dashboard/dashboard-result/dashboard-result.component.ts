import { Component, ChangeDetectionStrategy } from '@angular/core';
import { isLoser } from '../+state/utilities';
import { BestOf } from '../+state/dashboard.model';

@Component({
  selector: 'app-dashboard-result',
  template: `
    <app-dashboard-team
      [team]="match.firstTeam"
      [isLoser]="isLoser(match.firstTeam, match)"
    ></app-dashboard-team>
    <app-dashboard-team
      class="second-team"
      [team]="match.secondTeam"
      [isLoser]="isLoser(match.secondTeam, match)"
    ></app-dashboard-team>
  `,
  styleUrls: ['./dashboard-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardResultComponent {
  isLoser = isLoser;
  match = {
    id: '1',
    firstTeam: {
      id: '1',
      name: 'xd',
      score: 2
    },
    secondTeam: {
      id: '2',
      name: 'lol',
      score: 1
    },
    bo: BestOf.three
  };
}

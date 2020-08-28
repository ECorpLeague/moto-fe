import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BracketTeam } from '../+state/dashboard.model';

@Component({
  selector: 'app-dashboard-bracket-block-team',
  template: `
    <div class="name">{{ team.name }}</div>
    <div class="score">{{ team.score }}</div>
  `,
  styleUrls: ['./dashboard-bracket-block-team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardBracketBlockTeamComponent {
  @Input() team: BracketTeam;
}

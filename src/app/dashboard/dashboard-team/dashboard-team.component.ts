import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding
} from '@angular/core';
import { BracketTeam } from '../+state/dashboard.model';

@Component({
  selector: 'app-dashboard-team',
  template: `
    <div class="name">{{ team.name }}</div>
    <div class="score">{{ team.score }}</div>
  `,
  styleUrls: ['./dashboard-team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardTeamComponent {
  @Input() team: BracketTeam;

  @HostBinding('class.loser') @Input() isLoser: boolean;
}

import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding
} from '@angular/core';
import { BracketTeam } from 'src/app/dashboard/+state/dashboard.model';

@Component({
  selector: 'app-team-block',
  template: `
    <div class="name">{{ team.name }}</div>
    <div class="score">{{ team.score }}</div>
  `,
  styleUrls: ['./team-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamBlockComponent {
  @Input() team: BracketTeam;

  @HostBinding('class.loser') @Input() isLoser: boolean;
}

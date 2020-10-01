import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BracketMatch } from '../../dashboard/+state/dashboard.model';

@Component({
  selector: 'app-upcoming-match',
  template: `
    <div class="team">{{ match.firstTeam.name }}</div>
    <div class="date">
      <div>25/08</div>
      <div>21:00</div>
    </div>
    <div class="team">{{ match.secondTeam.name }}</div>
  `,
  styleUrls: ['./upcoming-match.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpcomingMatchComponent {
  @Input() match: BracketMatch;
}

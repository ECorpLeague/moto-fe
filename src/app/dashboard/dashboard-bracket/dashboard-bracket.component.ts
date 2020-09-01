import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Tournament } from '../+state/dashboard.model';

@Component({
  selector: 'app-dashboard-bracket',
  template: `
    <app-title-label [title]="'Bracket'"></app-title-label>
    <ngtt-double-elimination-tree
      [tournament]="tournament"
      [matchTemplate]="myMatchTemplate"
    ></ngtt-double-elimination-tree>

    <ng-template #myMatchTemplate let-match>
      <app-dashboard-bracket-block
        [match]="match"
      ></app-dashboard-bracket-block>
    </ng-template>
  `,
  styleUrls: ['./dashboard-bracket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardBracketComponent {
  @Input() tournament: Tournament;
}

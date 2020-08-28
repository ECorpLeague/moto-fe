import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgttTournament, NgttRound } from 'ng-tournament-tree';

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
  tournament: NgttTournament = {
    rounds: [
      {
        type: 'Winnerbracket',
        matches: [
          {
            firstTeam: { name: 'xd', score: 1 },
            secondTeam: { name: 'lol', score: 1 }
          },
          {
            firstTeam: { name: 'xd', score: 1 },
            secondTeam: { name: 'lol', score: 1 }
          }
        ]
      } as NgttRound,
      {
        type: 'Loserbracket',
        matches: [
          {
            firstTeam: { name: 'xd', score: 1 },
            secondTeam: { name: 'lol', score: 1 }
          },
          {
            firstTeam: { name: 'xd', score: 1 },
            secondTeam: { name: 'lol', score: 1 }
          }
        ]
      } as NgttRound,
      {
        type: 'Winnerbracket',
        matches: [
          {
            firstTeam: { name: 'xd', score: 1 },
            secondTeam: { name: 'lol', score: 1 }
          }
        ]
      } as NgttRound,
      {
        type: 'Loserbracket',
        matches: [
          {
            firstTeam: { name: 'xd', score: 1 },
            secondTeam: { name: 'lol', score: 1 }
          },
          {
            firstTeam: { name: 'xd', score: 1 },
            secondTeam: { name: 'lol', score: 1 }
          }
        ]
      } as NgttRound,
      {
        type: 'Loserbracket',
        matches: [
          {
            firstTeam: { name: 'xd', score: 1 },
            secondTeam: { name: 'lol', score: 1 }
          }
        ]
      } as NgttRound,
      {
        type: 'Loserbracket',
        matches: [
          {
            firstTeam: { name: 'xd', score: 1 },
            secondTeam: { name: 'lol', score: 1 }
          }
        ]
      } as NgttRound,
      {
        type: 'Final',
        matches: [
          {
            firstTeam: { name: 'xsssd', score: 1 },
            secondTeam: { name: 'lol', score: 1 }
          }
        ]
      } as NgttRound
    ]
  };
}
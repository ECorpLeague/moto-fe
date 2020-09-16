import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { SettingsActions } from '../../settings/+state/settings.actions';
import { switchMapTo } from 'rxjs/operators';
import { DashboardService } from './dashboard.service';
import { DashboardActions } from './dashboard.actions';
import { BestOf } from './dashboard.model';
import { NgttRound } from 'ng-tournament-tree';

const mockTournamentHandles = [
  { id: 'id1', name: 'Motoliga Season 5' },
  { id: 'id2', name: 'Motoliga Season 4' }
];

const mockTournaments = [
  {
    id: 'id1',
    name: 'Motorola Season 5',
    startDate: '24/05/2020',
    rounds: [
      {
        type: 'Winnerbracket',
        matches: [
          {
            firstTeam: { name: 'team #1', score: 2 },
            secondTeam: { name: 'teamName #2', score: 1 },
            bo: BestOf.three
          },
          {
            firstTeam: { name: 'team #1', score: 2 },
            secondTeam: { name: 'teamName #2', score: 1 },
            bo: BestOf.three
          }
        ]
      } as NgttRound,
      {
        type: 'Winnerbracket',
        matches: [
          {
            firstTeam: { name: 'team #1', score: 2 },
            secondTeam: { name: 'team #2', score: 1 },
            bo: BestOf.three
          }
        ]
      } as NgttRound,
      {
        type: 'Loserbracket',
        matches: [
          {
            firstTeam: { name: 'team #1', score: 2 },
            secondTeam: { name: 'team #2', score: 1 },
            bo: BestOf.three
          },
          {
            firstTeam: { name: 'team #1', score: 2 },
            secondTeam: { name: 'team #2', score: 1 },
            bo: BestOf.three
          }
        ]
      } as NgttRound,
      {
        type: 'Loserbracket',
        matches: [
          {
            firstTeam: { name: 'team #1', score: 2 },
            secondTeam: { name: 'team #2', score: 1 },
            bo: BestOf.three
          },
          {
            firstTeam: { name: 'team #1', score: 2 },
            secondTeam: { name: 'team #2', score: 1 },
            bo: BestOf.three
          }
        ]
      } as NgttRound,
      {
        type: 'Loserbracket',
        matches: [
          {
            firstTeam: { name: 'team #1', score: 2 },
            secondTeam: { name: 'team #2', score: 1 },
            bo: BestOf.three
          }
        ]
      } as NgttRound,
      {
        type: 'Loserbracket',
        matches: [
          {
            firstTeam: { name: 'team #1', score: 2 },
            secondTeam: { name: 'team #2', score: 1 },
            bo: BestOf.three
          }
        ]
      } as NgttRound,
      {
        type: 'Final',
        matches: [
          {
            firstTeam: { name: 'team #1', score: 2 },
            secondTeam: { name: 'team #2', score: 1 },
            bo: BestOf.three
          }
        ]
      } as NgttRound
    ]
  },
  {
    id: 'id2',
    name: 'Motorola Season 4',
    startDate: '23/05/2020',
    rounds: [
      {
        type: 'Winnerbracket',
        matches: [
          {
            firstTeam: { name: 'team #3', score: 1 },
            secondTeam: { name: 'teamName #4', score: 2 },
            bo: BestOf.three
          },
          {
            firstTeam: { name: 'team #3', score: 1 },
            secondTeam: { name: 'teamName #4', score: 2 },
            bo: BestOf.three
          }
        ]
      } as NgttRound,
      {
        type: 'Winnerbracket',
        matches: [
          {
            firstTeam: { name: 'team #3', score: 2 },
            secondTeam: { name: 'team #3', score: 1 },
            bo: BestOf.three
          }
        ]
      } as NgttRound,
      {
        type: 'Loserbracket',
        matches: [
          {
            firstTeam: { name: 'team #3', score: 2 },
            secondTeam: { name: 'team #4', score: 1 },
            bo: BestOf.three
          },
          {
            firstTeam: { name: 'team #3', score: 2 },
            secondTeam: { name: 'team #4', score: 1 },
            bo: BestOf.three
          }
        ]
      } as NgttRound,
      {
        type: 'Loserbracket',
        matches: [
          {
            firstTeam: { name: 'team #3', score: 2 },
            secondTeam: { name: 'team #4', score: 1 },
            bo: BestOf.three
          },
          {
            firstTeam: { name: 'team #3', score: 2 },
            secondTeam: { name: 'team #4', score: 1 },
            bo: BestOf.three
          }
        ]
      } as NgttRound,
      {
        type: 'Loserbracket',
        matches: [
          {
            firstTeam: { name: 'team #3', score: 1 },
            secondTeam: { name: 'team #4', score: 2 },
            bo: BestOf.three
          }
        ]
      } as NgttRound,
      {
        type: 'Loserbracket',
        matches: [
          {
            firstTeam: { name: 'team #3', score: 1 },
            secondTeam: { name: 'team #4', score: 2 },
            bo: BestOf.three
          }
        ]
      } as NgttRound,
      {
        type: 'Final',
        matches: [
          {
            firstTeam: { name: 'team #3', score: 1 },
            secondTeam: { name: 'team #4', score: 2 },
            bo: BestOf.three
          }
        ]
      } as NgttRound
    ]
  }
];

@Injectable()
export class DashboardEffects {
  constructor(
    private actions: Actions,
    private dashboardService: DashboardService
  ) {}

  // loadTournamentHandles = createEffect(() => () =>
  //   this.actions.pipe(
  //     ofType(SettingsActions.init),
  //     switchMap(() => this.dashboardService.getTournamentHandles()),
  //     map(tournamentHandles =>
  //       DashboardActions.tournamentsHandlesReceived({
  //         tournaments: tournamentHandles
  //       })
  //     )
  //   )
  // );

  mockTournaments = createEffect(() => () =>
    this.actions.pipe(
      ofType(SettingsActions.init),
      switchMapTo([
        DashboardActions.tournamentsHandlesReceived({
          tournaments: mockTournamentHandles
        }),
        DashboardActions.tournamentReceived({
          tournament: mockTournaments[0]
        }),
        DashboardActions.tournamentReceived({
          tournament: mockTournaments[1]
        })
      ])
    )
  );
}

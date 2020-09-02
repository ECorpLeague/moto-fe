import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NgttRound } from 'ng-tournament-tree';
import { Store } from '@ngrx/store';
import { BestOf } from '../+state/dashboard.model';
import { DashboardActions } from '../+state/dashboard.actions';
import { DashboardFacade } from '../+state/dashboard.facade';

@Component({
  selector: 'app-dashboard-page',
  template: `
    <ng-container *ngIf="dashboardFacade.currentTournament$ | async">
      <app-dashboard-tournament-info
        [name]="(dashboardFacade.currentTournament$ | async)!.name"
        [startDate]="(dashboardFacade.currentTournament$ | async)!.startDate"
      ></app-dashboard-tournament-info>
      <app-dashboard-bracket
        [tournament]="(dashboardFacade.currentTournament$ | async)!"
      ></app-dashboard-bracket>
    </ng-container>
  `,
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent implements OnInit {
  constructor(
    private store: Store<any>,
    public dashboardFacade: DashboardFacade
  ) {}

  ngOnInit(): void {
    this.store.dispatch(
      DashboardActions.tournamentsHandlesReceived({
        tournaments: [
          { id: 'dbb22', name: 'Motoliga Season 5' },
          { id: 'dbb33', name: 'Motoliga Season 4' }
        ]
      })
    );
    this.store.dispatch(
      DashboardActions.tournamentReceived({
        tournament: {
          id: 'dbb22',
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
        }
      })
    );
  }
}

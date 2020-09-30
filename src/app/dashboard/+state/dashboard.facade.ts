import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DashboardSelectors } from './dashboard.selectors';
import { BracketMatch, Tournament, TournamentHandle } from './dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardFacade {
  constructor(private store: Store<any>) {}

  tournamentsHandles$: Observable<TournamentHandle[]> = this.store.select(
    DashboardSelectors.selectTournamentHandles
  );

  currentTournament$: Observable<Tournament | null> = this.store.select(
    DashboardSelectors.selectCurrentTournament
  );

  areTournamentsHandlesLoading$: Observable<boolean> = this.store.select(
    DashboardSelectors.selectAreTournamentsHandlesLoading
  );

  results$: Observable<BracketMatch[]> = this.store.select(
    DashboardSelectors.selectResults
  );
}

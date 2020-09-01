import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DashboardSelectors } from './dashboard.selectors';
import { Tournament } from './dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardFacade {
  constructor(private store: Store<any>) {}

  tournaments$: Observable<Tournament[]> = this.store.select(
    DashboardSelectors.selectAllTournaments
  );

  lastTournament$: Observable<Tournament | null> = this.store.select(
    DashboardSelectors.selectLastTournament
  );
}

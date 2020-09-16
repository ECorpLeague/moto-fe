import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { TournamentHandle } from './dashboard.model';

const tournamentHandles = gql`
  query allTournamentHandles {
    tournamentHandle {
      id
      name
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private apollo: Apollo) {}

  // getTournamentHandles(): Observable<TournamentHandle[]> {
  //   return this.apollo
  //     .query<TournamentHandle[]>({ query: tournamentHandles })
  //     .pipe(map(({ data }) => data));
  // }
}

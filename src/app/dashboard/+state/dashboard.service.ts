import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Tournament, TournamentHandle } from './dashboard.model';

const tournamentHandles = gql`
  query {
    tournaments {
      id
      name
    }
  }
`;

const tournament = gql`
  query($id: Int!) {
    tournament(id: $id) {
      id
      name
      startDate
      rounds {
        id
        type
        matches {
          id
          firstTeam {
            name
            score
            teamId
          }
          secondTeam {
            name
            score
            teamId
          }
          bo
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private apollo: Apollo) {}

  getTournamentHandles(): Observable<TournamentHandle[]> {
    return this.apollo
      .query<any>({ query: tournamentHandles })
      .pipe(map(({ data }) => data.tournaments));
  }

  getTournamentById(id: number): Observable<Tournament> {
    return this.apollo
      .query<any>({ query: tournament, variables: { id } })
      .pipe(map(({ data }) => data.tournament));
  }
}

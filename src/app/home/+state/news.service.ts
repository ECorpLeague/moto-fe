import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const query = gql`
  query {
    blogPostCollection {
      items {
        content {
          json
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private apollo: Apollo) {}

  getNews() {
    this.apollo
      .use('contentful')
      .query<any>({ query })
      .subscribe(x => console.log(x));
  }
}

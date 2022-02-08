import { NgModule } from '@angular/core';
import { APOLLO_NAMED_OPTIONS, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { HttpHeaders } from '@angular/common/http';

const uri = 'https://dev-motoleague.herokuapp.com/graphql';
const contentful =
  'https://graphql.contentful.com/content/v1/spaces/dnr9zessqm53';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache({
      addTypename: false
    }),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache'
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
      }
    }
  };
}

export function createNamedApollo(httpLink: HttpLink) {
  return {
    contentful: {
      name: 'contentful',
      link: httpLink.create({
        uri: contentful,
        headers: new HttpHeaders({
          Authorization: 'Bearer X'
        })
      }),

      cache: new InMemoryCache({
        addTypename: false
      }),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'no-cache'
        },
        query: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all'
        }
      }
    }
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    },
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory: createNamedApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule {}

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateUrlInput = {
  slug?: Maybe<Scalars['String']>;
  target: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUrl: Url;
};


export type MutationCreateUrlArgs = {
  input: CreateUrlInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  url: Url;
  urls: UrlsConnection;
};


export type QueryUrlArgs = {
  id: Scalars['String'];
};


export type QueryUrlsArgs = {
  pagination?: Maybe<UrlsPaginationInput>;
};

export type Url = {
  __typename?: 'Url';
  id: Scalars['ID'];
  slug: Scalars['String'];
  target: Scalars['String'];
  visits: Scalars['Float'];
};

export type UrlEdge = {
  __typename?: 'UrlEdge';
  cursor: Scalars['String'];
  node: Url;
};

export type UrlsConnection = {
  __typename?: 'UrlsConnection';
  edges?: Maybe<Array<UrlEdge>>;
  pageInfo?: Maybe<PageInfo>;
};

export type UrlsPaginationInput = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UrlsQueryVariables = Exact<{ [key: string]: never; }>;


export type UrlsQuery = { __typename?: 'Query', urls: { __typename?: 'UrlsConnection', edges?: Array<{ __typename?: 'UrlEdge', node: { __typename?: 'Url', id: string, slug: string, target: string, visits: number } }> | null | undefined, pageInfo?: { __typename?: 'PageInfo', endCursor?: string | null | undefined, hasNextPage: boolean } | null | undefined } };

export type CreateUrlMutationVariables = Exact<{
  target: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
}>;


export type CreateUrlMutation = { __typename?: 'Mutation', createUrl: { __typename?: 'Url', id: string, slug: string, target: string, visits: number } };


export const UrlsDocument = gql`
    query Urls {
  urls {
    edges {
      node {
        id
        slug
        target
        visits
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    `;

/**
 * __useUrlsQuery__
 *
 * To run a query within a React component, call `useUrlsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUrlsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUrlsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUrlsQuery(baseOptions?: Apollo.QueryHookOptions<UrlsQuery, UrlsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UrlsQuery, UrlsQueryVariables>(UrlsDocument, options);
      }
export function useUrlsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UrlsQuery, UrlsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UrlsQuery, UrlsQueryVariables>(UrlsDocument, options);
        }
export type UrlsQueryHookResult = ReturnType<typeof useUrlsQuery>;
export type UrlsLazyQueryHookResult = ReturnType<typeof useUrlsLazyQuery>;
export type UrlsQueryResult = Apollo.QueryResult<UrlsQuery, UrlsQueryVariables>;
export const CreateUrlDocument = gql`
    mutation CreateUrl($target: String!, $slug: String) {
  createUrl(input: {target: $target, slug: $slug}) {
    id
    slug
    target
    visits
  }
}
    `;
export type CreateUrlMutationFn = Apollo.MutationFunction<CreateUrlMutation, CreateUrlMutationVariables>;

/**
 * __useCreateUrlMutation__
 *
 * To run a mutation, you first call `useCreateUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUrlMutation, { data, loading, error }] = useCreateUrlMutation({
 *   variables: {
 *      target: // value for 'target'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCreateUrlMutation(baseOptions?: Apollo.MutationHookOptions<CreateUrlMutation, CreateUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUrlMutation, CreateUrlMutationVariables>(CreateUrlDocument, options);
      }
export type CreateUrlMutationHookResult = ReturnType<typeof useCreateUrlMutation>;
export type CreateUrlMutationResult = Apollo.MutationResult<CreateUrlMutation>;
export type CreateUrlMutationOptions = Apollo.BaseMutationOptions<CreateUrlMutation, CreateUrlMutationVariables>;
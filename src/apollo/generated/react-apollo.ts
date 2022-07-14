import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Character = {
  __typename?: 'Character';
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** Episodes in which this character appeared. */
  episode: Array<Maybe<Episode>>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars['String']>;
  /** The id of the character. */
  id?: Maybe<Scalars['ID']>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars['String']>;
  /** The character's last known location */
  location?: Maybe<Location>;
  /** The name of the character. */
  name?: Maybe<Scalars['String']>;
  /** The character's origin location */
  origin?: Maybe<Location>;
  /** The species of the character. */
  species?: Maybe<Scalars['String']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars['String']>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars['String']>;
};

export type Characters = {
  __typename?: 'Characters';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: 'Episode';
  /** The air date of the episode. */
  air_date?: Maybe<Scalars['String']>;
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<Character>>;
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** The code of the episode. */
  episode?: Maybe<Scalars['String']>;
  /** The id of the episode. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the episode. */
  name?: Maybe<Scalars['String']>;
};

export type Episodes = {
  __typename?: 'Episodes';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  gender?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterEpisode = {
  episode?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterLocation = {
  dimension?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type Info = {
  __typename?: 'Info';
  /** The length of the response. */
  count?: Maybe<Scalars['Int']>;
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars['Int']>;
  /** The amount of pages. */
  pages?: Maybe<Scalars['Int']>;
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars['Int']>;
};

export type Location = {
  __typename?: 'Location';
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars['String']>;
  /** The id of the location. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the location. */
  name?: Maybe<Scalars['String']>;
  /** List of characters who have been last seen in the location. */
  residents: Array<Maybe<Character>>;
  /** The type of the location. */
  type?: Maybe<Scalars['String']>;
};

export type Locations = {
  __typename?: 'Locations';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a specific character by ID */
  character?: Maybe<Character>;
  /** Get the list of all characters */
  characters?: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  /** Get a specific episode by ID */
  episode?: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes?: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
  helloWorld?: Maybe<Scalars['String']>;
  /** Get a specific locations by ID */
  location?: Maybe<Location>;
  /** Get the list of all locations */
  locations?: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
};


export type QueryCharacterArgs = {
  id: Scalars['ID'];
};


export type QueryCharactersArgs = {
  filter?: InputMaybe<FilterCharacter>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryEpisodeArgs = {
  id: Scalars['ID'];
};


export type QueryEpisodesArgs = {
  filter?: InputMaybe<FilterEpisode>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryLocationArgs = {
  id: Scalars['ID'];
};


export type QueryLocationsArgs = {
  filter?: InputMaybe<FilterLocation>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']>;
};

export type FragmentCharacterFragment = { __typename?: 'Character', id?: string | null, status?: string | null, species?: string | null, type?: string | null, gender?: string | null, origin?: { __typename?: 'Location', name?: string | null, type?: string | null, dimension?: string | null } | null, location?: { __typename?: 'Location', id?: string | null, name?: string | null, type?: string | null, dimension?: string | null } | null };

export type FragmentCharacterEpisodesFragment = { __typename?: 'Character', id?: string | null, episode: Array<{ __typename?: 'Episode', id?: string | null, name?: string | null, air_date?: string | null, episode?: string | null } | null> };

export type FragmentCharacterLocationResidentsFragment = { __typename?: 'Character', id?: string | null, location?: { __typename?: 'Location', residents: Array<{ __typename?: 'Character', name?: string | null, id?: string | null, status?: string | null, species?: string | null, type?: string | null, gender?: string | null, origin?: { __typename?: 'Location', name?: string | null, type?: string | null, dimension?: string | null } | null, location?: { __typename?: 'Location', id?: string | null, name?: string | null, type?: string | null, dimension?: string | null } | null } | null> } | null };

export type FragmentEpisodeCharactersFragment = { __typename?: 'Character', id?: string | null, episode: Array<{ __typename?: 'Episode', characters: Array<{ __typename?: 'Character', id?: string | null, status?: string | null, species?: string | null, type?: string | null, gender?: string | null, origin?: { __typename?: 'Location', name?: string | null, type?: string | null, dimension?: string | null } | null, location?: { __typename?: 'Location', id?: string | null, name?: string | null, type?: string | null, dimension?: string | null } | null } | null> } | null> };

export type HelloWorldQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloWorldQuery = { __typename?: 'Query', helloWorld?: string | null };

export type GetAllRickAndMortyCharactersQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<FilterCharacter>;
}>;


export type GetAllRickAndMortyCharactersQuery = { __typename?: 'Query', characters?: { __typename?: 'Characters', info?: { __typename?: 'Info', next?: number | null, prev?: number | null, pages?: number | null, count?: number | null } | null, results?: Array<{ __typename?: 'Character', id?: string | null, name?: string | null, image?: string | null } | null> | null } | null };

export type GetRickAndMortyCharacterQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetRickAndMortyCharacterQuery = { __typename?: 'Query', character?: { __typename?: 'Character', id?: string | null, status?: string | null, species?: string | null, type?: string | null, gender?: string | null, origin?: { __typename?: 'Location', name?: string | null, type?: string | null, dimension?: string | null } | null, location?: { __typename?: 'Location', id?: string | null, name?: string | null, type?: string | null, dimension?: string | null } | null } | null };

export type GetRickAndMortyCharacterLocationResidentsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetRickAndMortyCharacterLocationResidentsQuery = { __typename?: 'Query', character?: { __typename?: 'Character', id?: string | null, location?: { __typename?: 'Location', residents: Array<{ __typename?: 'Character', name?: string | null, id?: string | null, status?: string | null, species?: string | null, type?: string | null, gender?: string | null, origin?: { __typename?: 'Location', name?: string | null, type?: string | null, dimension?: string | null } | null, location?: { __typename?: 'Location', id?: string | null, name?: string | null, type?: string | null, dimension?: string | null } | null } | null> } | null } | null };

export type GetRickAndMortyCharacterEpisodesQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetRickAndMortyCharacterEpisodesQuery = { __typename?: 'Query', character?: { __typename?: 'Character', id?: string | null, episode: Array<{ __typename?: 'Episode', id?: string | null, name?: string | null, air_date?: string | null, episode?: string | null } | null> } | null };

export type GetRickAndMortyEpisodeCharactersQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetRickAndMortyEpisodeCharactersQuery = { __typename?: 'Query', character?: { __typename?: 'Character', id?: string | null, episode: Array<{ __typename?: 'Episode', characters: Array<{ __typename?: 'Character', id?: string | null, status?: string | null, species?: string | null, type?: string | null, gender?: string | null, origin?: { __typename?: 'Location', name?: string | null, type?: string | null, dimension?: string | null } | null, location?: { __typename?: 'Location', id?: string | null, name?: string | null, type?: string | null, dimension?: string | null } | null } | null> } | null> } | null };

export const FragmentCharacterEpisodesFragmentDoc = gql`
    fragment fragmentCharacterEpisodes on Character {
  id
  episode {
    id
    name
    air_date
    episode
  }
}
    `;
export const FragmentCharacterFragmentDoc = gql`
    fragment fragmentCharacter on Character {
  id
  status
  species
  type
  gender
  origin {
    name
    type
    dimension
  }
  location {
    id
    name
    type
    dimension
  }
}
    `;
export const FragmentCharacterLocationResidentsFragmentDoc = gql`
    fragment fragmentCharacterLocationResidents on Character {
  id
  location {
    residents {
      name
      ...fragmentCharacter
    }
  }
}
    ${FragmentCharacterFragmentDoc}`;
export const FragmentEpisodeCharactersFragmentDoc = gql`
    fragment fragmentEpisodeCharacters on Character {
  id
  episode {
    characters {
      ...fragmentCharacter
    }
  }
}
    ${FragmentCharacterFragmentDoc}`;
export const HelloWorldDocument = gql`
    query HelloWorld {
  helloWorld
}
    `;

/**
 * __useHelloWorldQuery__
 *
 * To run a query within a React component, call `useHelloWorldQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloWorldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloWorldQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloWorldQuery(baseOptions?: Apollo.QueryHookOptions<HelloWorldQuery, HelloWorldQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloWorldQuery, HelloWorldQueryVariables>(HelloWorldDocument, options);
      }
export function useHelloWorldLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloWorldQuery, HelloWorldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloWorldQuery, HelloWorldQueryVariables>(HelloWorldDocument, options);
        }
export type HelloWorldQueryHookResult = ReturnType<typeof useHelloWorldQuery>;
export type HelloWorldLazyQueryHookResult = ReturnType<typeof useHelloWorldLazyQuery>;
export type HelloWorldQueryResult = Apollo.QueryResult<HelloWorldQuery, HelloWorldQueryVariables>;
export const GetAllRickAndMortyCharactersDocument = gql`
    query GetAllRickAndMortyCharacters($page: Int, $filter: FilterCharacter) {
  characters(page: $page, filter: $filter) {
    info {
      next
      prev
      pages
      count
    }
    results {
      id
      name
      image
    }
  }
}
    `;

/**
 * __useGetAllRickAndMortyCharactersQuery__
 *
 * To run a query within a React component, call `useGetAllRickAndMortyCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRickAndMortyCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRickAndMortyCharactersQuery({
 *   variables: {
 *      page: // value for 'page'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetAllRickAndMortyCharactersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllRickAndMortyCharactersQuery, GetAllRickAndMortyCharactersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllRickAndMortyCharactersQuery, GetAllRickAndMortyCharactersQueryVariables>(GetAllRickAndMortyCharactersDocument, options);
      }
export function useGetAllRickAndMortyCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllRickAndMortyCharactersQuery, GetAllRickAndMortyCharactersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllRickAndMortyCharactersQuery, GetAllRickAndMortyCharactersQueryVariables>(GetAllRickAndMortyCharactersDocument, options);
        }
export type GetAllRickAndMortyCharactersQueryHookResult = ReturnType<typeof useGetAllRickAndMortyCharactersQuery>;
export type GetAllRickAndMortyCharactersLazyQueryHookResult = ReturnType<typeof useGetAllRickAndMortyCharactersLazyQuery>;
export type GetAllRickAndMortyCharactersQueryResult = Apollo.QueryResult<GetAllRickAndMortyCharactersQuery, GetAllRickAndMortyCharactersQueryVariables>;
export const GetRickAndMortyCharacterDocument = gql`
    query GetRickAndMortyCharacter($id: ID!) {
  character(id: $id) {
    ...fragmentCharacter
  }
}
    ${FragmentCharacterFragmentDoc}`;

/**
 * __useGetRickAndMortyCharacterQuery__
 *
 * To run a query within a React component, call `useGetRickAndMortyCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRickAndMortyCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRickAndMortyCharacterQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRickAndMortyCharacterQuery(baseOptions: Apollo.QueryHookOptions<GetRickAndMortyCharacterQuery, GetRickAndMortyCharacterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRickAndMortyCharacterQuery, GetRickAndMortyCharacterQueryVariables>(GetRickAndMortyCharacterDocument, options);
      }
export function useGetRickAndMortyCharacterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRickAndMortyCharacterQuery, GetRickAndMortyCharacterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRickAndMortyCharacterQuery, GetRickAndMortyCharacterQueryVariables>(GetRickAndMortyCharacterDocument, options);
        }
export type GetRickAndMortyCharacterQueryHookResult = ReturnType<typeof useGetRickAndMortyCharacterQuery>;
export type GetRickAndMortyCharacterLazyQueryHookResult = ReturnType<typeof useGetRickAndMortyCharacterLazyQuery>;
export type GetRickAndMortyCharacterQueryResult = Apollo.QueryResult<GetRickAndMortyCharacterQuery, GetRickAndMortyCharacterQueryVariables>;
export const GetRickAndMortyCharacterLocationResidentsDocument = gql`
    query GetRickAndMortyCharacterLocationResidents($id: ID!) {
  character(id: $id) {
    ...fragmentCharacterLocationResidents
  }
}
    ${FragmentCharacterLocationResidentsFragmentDoc}`;

/**
 * __useGetRickAndMortyCharacterLocationResidentsQuery__
 *
 * To run a query within a React component, call `useGetRickAndMortyCharacterLocationResidentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRickAndMortyCharacterLocationResidentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRickAndMortyCharacterLocationResidentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRickAndMortyCharacterLocationResidentsQuery(baseOptions: Apollo.QueryHookOptions<GetRickAndMortyCharacterLocationResidentsQuery, GetRickAndMortyCharacterLocationResidentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRickAndMortyCharacterLocationResidentsQuery, GetRickAndMortyCharacterLocationResidentsQueryVariables>(GetRickAndMortyCharacterLocationResidentsDocument, options);
      }
export function useGetRickAndMortyCharacterLocationResidentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRickAndMortyCharacterLocationResidentsQuery, GetRickAndMortyCharacterLocationResidentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRickAndMortyCharacterLocationResidentsQuery, GetRickAndMortyCharacterLocationResidentsQueryVariables>(GetRickAndMortyCharacterLocationResidentsDocument, options);
        }
export type GetRickAndMortyCharacterLocationResidentsQueryHookResult = ReturnType<typeof useGetRickAndMortyCharacterLocationResidentsQuery>;
export type GetRickAndMortyCharacterLocationResidentsLazyQueryHookResult = ReturnType<typeof useGetRickAndMortyCharacterLocationResidentsLazyQuery>;
export type GetRickAndMortyCharacterLocationResidentsQueryResult = Apollo.QueryResult<GetRickAndMortyCharacterLocationResidentsQuery, GetRickAndMortyCharacterLocationResidentsQueryVariables>;
export const GetRickAndMortyCharacterEpisodesDocument = gql`
    query GetRickAndMortyCharacterEpisodes($id: ID!) {
  character(id: $id) {
    ...fragmentCharacterEpisodes
  }
}
    ${FragmentCharacterEpisodesFragmentDoc}`;

/**
 * __useGetRickAndMortyCharacterEpisodesQuery__
 *
 * To run a query within a React component, call `useGetRickAndMortyCharacterEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRickAndMortyCharacterEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRickAndMortyCharacterEpisodesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRickAndMortyCharacterEpisodesQuery(baseOptions: Apollo.QueryHookOptions<GetRickAndMortyCharacterEpisodesQuery, GetRickAndMortyCharacterEpisodesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRickAndMortyCharacterEpisodesQuery, GetRickAndMortyCharacterEpisodesQueryVariables>(GetRickAndMortyCharacterEpisodesDocument, options);
      }
export function useGetRickAndMortyCharacterEpisodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRickAndMortyCharacterEpisodesQuery, GetRickAndMortyCharacterEpisodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRickAndMortyCharacterEpisodesQuery, GetRickAndMortyCharacterEpisodesQueryVariables>(GetRickAndMortyCharacterEpisodesDocument, options);
        }
export type GetRickAndMortyCharacterEpisodesQueryHookResult = ReturnType<typeof useGetRickAndMortyCharacterEpisodesQuery>;
export type GetRickAndMortyCharacterEpisodesLazyQueryHookResult = ReturnType<typeof useGetRickAndMortyCharacterEpisodesLazyQuery>;
export type GetRickAndMortyCharacterEpisodesQueryResult = Apollo.QueryResult<GetRickAndMortyCharacterEpisodesQuery, GetRickAndMortyCharacterEpisodesQueryVariables>;
export const GetRickAndMortyEpisodeCharactersDocument = gql`
    query GetRickAndMortyEpisodeCharacters($id: ID!) {
  character(id: $id) {
    ...fragmentEpisodeCharacters
  }
}
    ${FragmentEpisodeCharactersFragmentDoc}`;

/**
 * __useGetRickAndMortyEpisodeCharactersQuery__
 *
 * To run a query within a React component, call `useGetRickAndMortyEpisodeCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRickAndMortyEpisodeCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRickAndMortyEpisodeCharactersQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRickAndMortyEpisodeCharactersQuery(baseOptions: Apollo.QueryHookOptions<GetRickAndMortyEpisodeCharactersQuery, GetRickAndMortyEpisodeCharactersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRickAndMortyEpisodeCharactersQuery, GetRickAndMortyEpisodeCharactersQueryVariables>(GetRickAndMortyEpisodeCharactersDocument, options);
      }
export function useGetRickAndMortyEpisodeCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRickAndMortyEpisodeCharactersQuery, GetRickAndMortyEpisodeCharactersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRickAndMortyEpisodeCharactersQuery, GetRickAndMortyEpisodeCharactersQueryVariables>(GetRickAndMortyEpisodeCharactersDocument, options);
        }
export type GetRickAndMortyEpisodeCharactersQueryHookResult = ReturnType<typeof useGetRickAndMortyEpisodeCharactersQuery>;
export type GetRickAndMortyEpisodeCharactersLazyQueryHookResult = ReturnType<typeof useGetRickAndMortyEpisodeCharactersLazyQuery>;
export type GetRickAndMortyEpisodeCharactersQueryResult = Apollo.QueryResult<GetRickAndMortyEpisodeCharactersQuery, GetRickAndMortyEpisodeCharactersQueryVariables>;
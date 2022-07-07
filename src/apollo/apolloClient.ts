import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
//import { RetryLink } from "@apollo/client/link/retry";
import { IncomingMessage, ServerResponse } from 'http';
import { SchemaLink } from '@apollo/client/link/schema';
import { useMemo } from 'react';
import merge from 'deepmerge';
import schema from './schema';
import { Character } from '../types';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

export type ResolverContext = {
	req?: IncomingMessage
	res?: ServerResponse
}

function createIsomorphLink(context: ResolverContext = {}) {
	if (typeof window === 'undefined') {
		return new SchemaLink({ schema, context })
	} else {
		return new HttpLink({
			uri: '/api/graphql',
			credentials: 'same-origin',
		})
	}
};

function createApolloClient(context?: ResolverContext) {
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: createIsomorphLink(context),
		cache: new InMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						characters: {
							keyArgs: false,
							merge(existing = {}, incoming,) {
								let results: Character[] = [];

								if (existing && existing.results) {
									results = results.concat(existing.results);
								}

								if (incoming && incoming.results) {
									results = results.concat(incoming.results);
								}
								return {
									...incoming,
									results,
								};
							},
						},
					},
				},
			},
		}),
	});
};

export function initializeApollo(initialState: NormalizedCacheObject | null = null, context?: ResolverContext) {
	const _apolloClient = apolloClient ?? createApolloClient(context)
	if (initialState) {
		const existingCache = _apolloClient.extract();
		const data = merge(initialState, existingCache);
		_apolloClient.cache.restore(data);
	};

	if (typeof window === 'undefined') {
		return _apolloClient;
	}

	if (!apolloClient) {
		apolloClient = _apolloClient;
	}

	return _apolloClient;
};

export function useApollo(initialState: any) {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store
};

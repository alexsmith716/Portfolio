import { DataSource } from 'apollo-datasource';
import axios from 'axios';
import { print } from 'graphql/language/printer';

import { GetAllRickAndMortyCharacters } from './queries/queries.graphql';
import { FilterCharacter } from './generated/react-apollo';

export class RickAndMortyAPI extends DataSource {
	constructor() {
		super();
	};

	graphqlClient({ query = '', variables = {}, }) {
		const params = {
			query: query,
			variables: { ...variables },
		};
		return axios.get(`https://rickandmortyapi.com/graphql`, { params: params })
			.then((response) => {
				const {data: { characters },} = response.data;
				if(characters.results && characters.results.length < 1){
					return Promise.reject();
				}
				return response.data;
			})
			.catch((error) => {
				console.error(error);
				return Promise.reject();
			});
	};

	async GetAllRickAndMortyCharacters(page?: number, filter?: FilterCharacter) {
		try {
			const astStandardFormat = print(GetAllRickAndMortyCharacters);
			const response = await this.graphqlClient({
				query: astStandardFormat,
				variables: { page: page, filter: filter },
			});
			const {data: { characters },} = response;
			return characters;
		} catch (error) {
			console.error(error);
			return Promise.reject();
		}
	};
};

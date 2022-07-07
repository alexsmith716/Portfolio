import { Resolvers } from './generated/resolvers-types';

export const resolvers: Resolvers = {
	Query: {
		helloWorld: () => 'Hello World!',

		characters: async (_obj, { page, filter }, { dataSources }, _info) => {
			try {
				const characters = await dataSources.rickAndMorty.GetAllRickAndMortyCharacters(page, filter);
				return characters;
			} catch (error) {
				console.error(error);
				return Promise.reject();
			}
		},
	},
};

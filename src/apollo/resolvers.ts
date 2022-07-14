import { Resolvers } from './generated/resolvers-types';

export const resolvers: Resolvers = {
	Query: {
		helloWorld: () => 'Hello World!',

		characters: async (_obj, args, { dataSources }, _info) => {
			try {
				const operationName = _info!.operation!.name!.value;
				const { page, filter } = args;
				const response = await dataSources.rickAndMorty[operationName](page, filter);
				return response;
			} catch (error) {
				console.error(error);
				return Promise.reject();
			}
		},

		character: async (_obj, args, { dataSources }, _info) => {
			try {
				const operationName = _info!.operation!.name!.value;
				const { id } = args;

				const response = await dataSources.rickAndMorty[operationName](id);

				return response;
			} catch (error) {
				console.error(error);
				return Promise.reject();
			}
		},
	},
};

import { PageConfig } from 'next';
import { ApolloServer } from 'apollo-server-micro';
import { text } from 'micro';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import { send } from 'micro';
import { ServerResponse } from 'http';
import schema from '../../apollo/schema';
import { RickAndMortyAPI } from '../../apollo/rickAndMortyAPI';

const dataSources = () => ({
	rickAndMorty: new RickAndMortyAPI(),
});

export const config: PageConfig = {
	api: {
		bodyParser: false,
	},
};

const apolloServer = new ApolloServer({
	schema,
	dataSources,
});

const startServer = apolloServer.start();

// { operationName: '', variables: {}, query: '' }
export default async function handler(req: MicroRequest, res: ServerResponse) {
	const reqQuery = await text(req);
	if(reqQuery){
		//console.log('reqQuery: ', reqQuery);
	}
	try {
		await startServer;
		await apolloServer.createHandler({path: '/api/graphql'})(req, res);
	} catch (error) {
		console.error(error);
		//send(res, 400, {error: 'Error when attempting to fetch resource.'});
		send(res, (error as any).statusCode || 400, (error as Error).message);
	}
};

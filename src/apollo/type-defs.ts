import gql from 'graphql-tag';

export const typeDefs = gql`
	type Query {
		helloWorld: String

		characters(page: Int, filter: FilterCharacter): Characters

		character(id: ID!): Character
	}

	type Characters {
		info: Info
		results: [Character]
	}

	type Locations {
		info: Info
		results: [Location]
	}

	type Episodes {
		info: Info
		results: [Episode]
	}

	type Character {
		id: ID
		name: String
		status: String
		species: String
		type: String
		gender: String
		origin: Location
		location: Location
		image: String
		episode: [Episode]
		created: String
	}

	type Location {
		id: ID
		name: String
		type: String
		dimension: String
		residents: [Character]
		created: String
	}

	type Episode {
		id: ID
		name: String
		air_date: String
		episode: String
		characters: [Character]
	}

	type Info {
		count: Int
		pages: Int
		next: Int
		prev: Int
	}

	input FilterCharacter {
		name: String
		status: String
		species: String
		type: String
		gender: String
	}

	input FilterLocation {
		name: String
		type: String
		dimension: String
	}

	input FilterEpisode {
		name: String
		episode: String
	}
`;

export type AboutCSVBPostType = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export type HydrateActionType = {
	type: '__NEXT_REDUX_WRAPPER_HYDRATE__';
	payload: any;
};

export type ActionLoadPromiseType = {
	type: string[];
	httpClientPromise: Promise<any>;
};

export type BridgeRatingType = {
	Borough: string;
	Bridge: string;
	CurrentRating: number;
	VerbalRating: string;
	ReplacementCost: number;
};

export type StyledThemeType = {
	textColor: string;
	backgroundColor: string;
	navBarColor: string;
	spinnerColor: string;
	rutgersScarlet: string;
};

export type DateNowType = {
	time: number;
	message: string;
	status: number;
};

export type DateNowErrorType = {
	message: string;
	status: number;
};

export type User = {
	id: number;
	name: string;
};

export type LatLonType = {
	lat: number;
	lon: number;
};

export type FilterCharacterType = {
	name?: string;
	status?: string;
	species?: string;
	type?: string;
	gender?: string;
};

export type QueryResolverCharacterIDArgs = {
	id: string;
};

export type QueryResolverCharacterIDSArgs = {
	ids: QueryResolverCharacterIDArgs[];
};

export type QueryResolverCharactersArgs = {
	page?: number;
	filter?: FilterCharacterType;
};

export type Character = {
	__typename: string;
	name: string;
	image: string;
};

export type CharactersInfo = {
	__typename: string;
	next: number | null;
	prev: number | null;
	pages: number;
	count: number;
};

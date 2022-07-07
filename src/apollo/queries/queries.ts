export const GET_ALL_RICK_AND_MORTY_CHARACTERS_TEST = `
	query GetAllRickAndMortyCharacters($page: Int, $filter: FilterCharacter){
		characters(page: $page, filter: $filter) {
			info {
				next
				prev
				pages
				count
			}
			results {
				name
				image
			}
		}
	}
`;

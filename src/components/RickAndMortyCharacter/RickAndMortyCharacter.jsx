import React from 'react';

import { Thumbnail, ThumbnailImage } from '../../styles';

export const RickAndMortyCharacter = ({ character, index}) => {
	return (
		<>
			<Thumbnail>
				{character.image ? (
					<ThumbnailImage src={character.image} alt={character.name} />
				) : (
					<div className="text-center">
						<i>Image not found</i>
					</div>
				)}
			</Thumbnail>
			<div className="text-center">
				{character.name ? <h4>{character.name} <span><h5>{index+1}</h5></span></h4> : <i>Name not found</i>}
			</div>
		</>
	);
};

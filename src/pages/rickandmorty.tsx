import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useQuery, NetworkStatus } from '@apollo/client';
import { useInView } from 'react-intersection-observer';
import { Character, CharactersInfo } from '../types';
import Loading from '../components/Loading';
import Button from '../components/Button';
import { RickAndMortyCharacter } from '../components/RickAndMortyCharacter';
import { GetAllRickAndMortyCharactersDocument } from '../apollo/generated/react-apollo';

interface RickAndMortyPageProps {
	documentTitle?: string;
};

const RickAndMorty: NextPage<RickAndMortyPageProps> = ({ documentTitle }) => {
	const [title, setTitle] = useState('');
	const [queryPage, setQueryPage] = useState<number | null>(null);
	const [rickAndMortyCharactersInfo, setRickAndMortyCharactersInfo] = useState<CharactersInfo|null>(null);
	const [rickAndMortyCharactersCurrentPage, setRickAndMortyCharactersCurrentPage] = useState<number | null>(null);
	const [charactersLoaded, setCharactersLoaded] = useState<number | null>(null);
	const [allCharactersLoaded, setAllCharactersLoaded] = useState(false);
	const [queryError, setQueryError] = useState(false);

	const {
		loading,
		error,
		data,
		networkStatus,
		fetchMore,
		//refetch,
	} = useQuery(GetAllRickAndMortyCharactersDocument, {
		notifyOnNetworkStatusChange: true,
		onError: (error) => {
			console.error(error);
			setQueryError(true);
		},
		onCompleted: (data) => {
			setQueryPage(data.characters.info.next);
			setQueryError(false);
			const { characters: { info } } = data;
			if (info) {
				setRickAndMortyCharactersInfo(info);
				if (!info.prev && info.next) {
					setRickAndMortyCharactersCurrentPage(1);
					setCharactersLoaded((info.next - 1)*20);
				} else if (info.next && info.prev) {
					setRickAndMortyCharactersCurrentPage(info.next - 1);
					setCharactersLoaded((info.next - 1)*20);
				} else {
					setRickAndMortyCharactersCurrentPage(info.pages);
					setCharactersLoaded(info.count);
					setAllCharactersLoaded(true);
				}
			}
		},
	});

	const isFetchingMore = networkStatus === NetworkStatus.fetchMore;

	useEffect(() => {
		setTitle(documentTitle+':\u0020Rick\u0020And\u0020Morty\u0020Query');
	}, [documentTitle]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	//@ts-ignore
	const { ref, inView, entry } = useInView({
		fallbackInView: true,
		//delay: 250,
		onChange: async inView => {
			if (inView && queryPage && !isFetchingMore) {
				try{
					await fetchMore({
						variables: {
							page: queryPage
						}
					});
				} catch(error) {
					console.error(error);
					setQueryError(true);
				}
			}
		},
	});

	return (
		<>
			<Head>
				<title>{ !title ? documentTitle : title }</title>
			</Head>

			<div className="container">
				{/* ---------------------------------------------- */}

				<h1 className="mt-4 mb-3">The Rick And Morty Page</h1>

				{/* ---------------------------------------------- */}

				<div className="bg-color-ivory container-padding-border-radius-1 overflow-wrap-break-word mb-5">

					{loading && (
						<div className="flex-column align-items-center">
							<div className="text-center">
								<div className="container-padding-radius-10">
									<Loading text="Loading" />
								</div>
							</div>
						</div>
					)}

					{error || queryError && (
						<div className="flex-column align-items-center">
							<div className="text-center">
								<div className="bg-warn-red container-padding-radius-10 text-color-white">
									Error when attempting to fetch resource.
								</div>
							</div>
						</div>
					)}

					{rickAndMortyCharactersCurrentPage && rickAndMortyCharactersInfo && (
						<div className="mb-3">
							<h5>Page {rickAndMortyCharactersCurrentPage} of {rickAndMortyCharactersInfo.pages}</h5>
						</div>
					)}

					<div className="row-grid-rickandmorty">
						{data && data.characters.results.map((character: Character, index:number) => (
							<div key={index} className="mb-3 container-padding-border-radius-2">
								<RickAndMortyCharacter character={character} index={index} />
							</div>
						))}
					</div>

					{rickAndMortyCharactersCurrentPage && rickAndMortyCharactersInfo && (
						<div className="mb-3">
							<div>
								<h5>Page {rickAndMortyCharactersCurrentPage} of {rickAndMortyCharactersInfo.pages}</h5>
							</div>
							<div>
								<h5>Characters Loaded: {charactersLoaded}</h5>
							</div>
						</div>
					)}

					{data && !isFetchingMore && (
						<>
							<div className="mb-3">
								<Button
									type="button"
									className={`btn-primary btn-md ${allCharactersLoaded ? 'disabled' : ''}`}
									onClick={() => {
										fetchMore({
											variables: {
												page: queryPage
											},
										});
									}}
									buttonText="Fetch More"
								/>
							</div>

							<div className="mb-3">
								<Button
									type="button"
									className="btn-secondary btn-md"
									onClick={scrollToTop}
									buttonText="Scroll To Top"
								/>
							</div>
						</>
					)}
					{queryError && (
						<div className="flex-column align-items-center">
							<div className="text-center">
								<div className="bg-warn-red container-padding-radius-10 text-color-white">
									Error when attempting to fetch resource.
								</div>
							</div>
						</div>
					)}
					<div ref={ref}></div>
				</div>
			</div>
		</>
	);
};

export default RickAndMorty;

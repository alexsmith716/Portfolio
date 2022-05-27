import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux/store';
import { loadOpenWeathermap } from '../../redux/reducers/openWeathermapSlice';
import Loading from '../Loading/Loading';
import Button from '../Button';
import * as Styles from './styles';

const OpenWeathermap = () => {
	const dispatch = useDispatch();

	let openWeathermapDataTemp;
	let latLon = {
		lat: undefined,
		lon: undefined,
	};

	const formatter = new Intl.NumberFormat('en-US', {
		minimumFractionDigits: 1,
		maximumFractionDigits: 1,
	});

	const loading = useSelector((state: AppState) => state.openWeathermapReducer.loading);
	const loaded = useSelector((state: AppState) => state.openWeathermapReducer.loaded);
	const openWeathermapData = useSelector((state: AppState) => state.openWeathermapReducer.openWeathermapData);

	if(openWeathermapData && !openWeathermapData.error) {
		openWeathermapDataTemp = formatter.format(openWeathermapData.main.temp);
		latLon = {
			lat: openWeathermapData.coord.lat,
			lon: openWeathermapData.coord.lon,
		};
	}

	return (
		<div className="container">
			<Styles.OpenWeathermapContainerBgColor className="flex-column align-items-center mb-5">
				<Styles.OpenWeathermapContainer className="flex-column align-items-center">
					{/* (>>>>>>>>>>>>>>>>>>>>>> LOADING >>>>>>>>>>>>>>>>>>>>>>>>) */}
					{loading && <Loading text="Loading" />}

					{/* (>>>>>>>>>>>>>>>>>>>>>> LOADED >>>>>>>>>>>>>>>>>>>>>>>>) */}
					{!loading && (
						<Styles.OpenWeathermapContainerStyled className="flex-column-center">
							<div>
								The Exclusive <i>OpenWeather.com</i>&nbsp;forecast{loaded && openWeathermapData && <>&nbsp;for:</>}
							</div>

							{!loaded && openWeathermapData && openWeathermapData.error && <Styles.DataMessageError>{openWeathermapData.error}</Styles.DataMessageError>}

							{loaded && openWeathermapData && !openWeathermapData.error && (
								<div><Styles.DataMessageName data-testid="open-weather">{openWeathermapData.name}</Styles.DataMessageName></div>
								)}

							{loaded && openWeathermapData && !openWeathermapData.error && (
								<div><Styles.DataMessage>{openWeathermapData.weather[0].main}</Styles.DataMessage>&nbsp;-&nbsp;<Styles.DataMessage>{openWeathermapData.weather[0].description}</Styles.DataMessage></div>
								)}

							{loaded && openWeathermapData && !openWeathermapData.error && (
								<><Styles.DataMessageTemp>{openWeathermapDataTemp}&#x00B0;F</Styles.DataMessageTemp></>
								)}

							<div className="mt-2">
								<Button
									className="btn-primary btn-md"
									onClick={() => dispatch(loadOpenWeathermap(latLon))}
									buttonText="Reload"
								/>
							</div>
						</Styles.OpenWeathermapContainerStyled>
					)}
				</Styles.OpenWeathermapContainer>
			</Styles.OpenWeathermapContainerBgColor>
		</div>
	);
};

export default OpenWeathermap;

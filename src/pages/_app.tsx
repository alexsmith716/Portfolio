import { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import { ThemeContext } from '../styled/ThemeContext';
import { Layout } from '../components/Layout';
import { actionSetUserAgent } from '../redux/reducers/userAgentSlice';
import { getAddress, loadOpenWeathermap } from '../redux/reducers/openWeathermapSlice';
import { getUserAgent, isBot } from '../utils/userAgent';
import { LatLonType } from '../types';
import '../styled/fonts.css';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<ThemeContext>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeContext>
		</>
	);
};

App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ Component, ctx }) => {
	const isServer = typeof window === 'undefined' && !ctx.req?.url?.startsWith('/_next/data');

	if (isServer) {
		store.dispatch(actionSetUserAgent(getUserAgent(ctx?.req?.headers['user-agent']!), isBot(ctx?.req?.headers['user-agent']!)));
	}

	if (isServer) {
		const latLon = await getAddress()
			.then((response) => {
				return response;
			})
			.catch(() => {
				store.dispatch({type: 'OPENWEATHERMAP_FAIL', error: { error: 'Error when attempting to fetch resource.' }});
			});
		if(latLon) {
			await store.dispatch(loadOpenWeathermap((latLon as unknown) as LatLonType))
				.catch((error: Error) => {
					console.error(error);
				})
		}
	}

	const pageProps = {
		...(Component.getInitialProps
			? await Component.getInitialProps({
					...ctx,
					store,
				})
			: {}),
		documentTitle: 'Alex Smith\'s App',
	};

	return {
		pageProps,
	};
});

export default wrapper.withRedux(App);

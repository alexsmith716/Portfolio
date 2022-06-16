import NavBar from '../../src/components/NavBar/NavBar';
import { NavLinks } from '../../src/components/NavBar/NavLinks';
import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => ({
	useRouter() {
		return ({
			route: '/',
			pathname: '/',
			query: {},
			asPath: '/',
			isFallback: false,
			basePath: '',
			locale: undefined,
			locales: undefined,
			defaultLocale: undefined,
			isReady: true,
			domainLocales: undefined,
			isPreview: false,
			isLocaleDomain: false
		});
	},
}));

describe('Navbar Component', () => {
	it('should render all NavBarNav container Links', () => {
		render(<NavBar />);

		expect(screen.getByText('DarkTheme')).toBeInTheDocument();

		for(let i = 0; i < NavLinks.length; i++) {
			expect(screen.getByText(`${NavLinks[i].title}`)).toBeInTheDocument();
		}
	});
});

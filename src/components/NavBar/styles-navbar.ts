import styled, { css } from 'styled-components';
import { colors } from '../../styled/Colors';
import { SvgBars } from '../../assets/svg';
import { SvgTimes } from '../../assets/svg';

interface Props {
	readonly clicked?: boolean;
	readonly activelink?: string;
}

const NavBarBGTheme = css`
	background-color: ${(props): string => props.theme.navBarColor};
`;

export const NavBar = styled.div`
	display: flex;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 1030;
	${NavBarBGTheme}
	height: 56px;
	align-items: center;
`;

export const Expand = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const NavBarBrandLink = styled.a`
  color: #fff;
  font-size: 1.25rem;
  text-decoration: none;
  cursor: pointer;
`;

export const Toggler = styled.div`
	display: none;

	@media screen and (max-width: 992px) {
		display: block;
		cursor: pointer;
	}
`;

export const NavBarNav = styled.ul<Props>`
	margin-left: auto;
	display: grid;
	grid-template-columns: repeat(6, auto);
	grid-gap: 15px;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 992px) {
		grid-template-columns: 1fr;
		grid-gap: 1px;
		width: 100%;
		position: absolute;
		top: 56px;
		left: -100%;
		${(props) =>
			props.clicked &&
			css`
				background: #343a40;
				left: 0;
				opacity: 1;
				z-index: 1;
			`}
	}
`;

export const NavBarNavA = styled.a`
	color: #adb5bd;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		color: #e9ecef;
	}

	@media screen and (max-width: 992px) {
		text-align: center;
		padding: 0.5rem;
		width: 100%;
		display: table;

		&:hover {
			background-color: ${colors.grayTwentyfour};
		}
	}
`;

export const NavBarNavLink = styled.a<Props>`
  color: ${(props): string => (props.activelink === 'true' ? colors.ivory : colors.grayFive)};
  text-decoration: none;

  &:hover {
    color: ${colors.grayTwo};
  }

  @media screen and (max-width: 992px) {
    text-align: center;
    padding: 0.5rem;
    width: 100%;
    display: table;

    &:hover {
      background-color: ${colors.grayTwentyfour};
    }
  }
`;

export const StyledSvgBars = styled(SvgBars)`
	height: 30px;
	vertical-align: middle;
`;

export const StyledSvgTimes = styled(SvgTimes)`
	height: 30px;
	vertical-align: middle;
`;

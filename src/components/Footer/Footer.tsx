import * as Styles from './styles-footer';

export default function Footer() {
	return (
		<Styles.FooterStyled>
			<div className="container">
				<Styles.FooterContainer className="flex-column align-items-center pt-4 pb-4">
					<div>Copyright &copy; {new Date().getFullYear()} · Alex Smith&apos;s App</div>
					<div className="flex-row align-items-center">
						<Styles.FooterHeadphones>
							<Styles.StyledSvgHeadphones fill="#ffffff" />
						</Styles.FooterHeadphones>
						<Styles.SvgFooterHeadphones>Footer Headphones</Styles.SvgFooterHeadphones>
					</div>
					<Styles.FooterBlurd>Don&apos;t Forget To Vote!</Styles.FooterBlurd>
				</Styles.FooterContainer>
			</div>
		</Styles.FooterStyled>
	)
}

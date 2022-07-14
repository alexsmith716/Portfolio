import styled from 'styled-components';

export const ModalContainer = styled.div`
	left: 0;
	top: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	flex-direction: column;
`;

export const ModalChildren = styled.div`
	border: 1px solid black;
	box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
	box-sizing: border-box;
	background-color: #404040;
	z-index: 10000;
`;

export const Screen = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.2);
`;

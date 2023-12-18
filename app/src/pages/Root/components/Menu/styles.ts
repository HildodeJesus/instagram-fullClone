import styled from "styled-components";

export const ContainerMenu = styled.div`
	height: 100%;
	width: 100%;
	padding: 5px;
	border-right: 1px solid #191919;
	border-top: 1px solid #191919;
	display: flex;
	flex-direction: column;
	grid-area: menu;

	@media (min-width: 1024px) {
		width: 250px;
	}

	@media (min-width: 1440px) {
		width: 336px;
	}
`;

export const WrapperImage = styled.picture`
	padding: 30px 20px;
	width: 100%;
	flex-grow: 0;
	flex-basis: auto;
`;

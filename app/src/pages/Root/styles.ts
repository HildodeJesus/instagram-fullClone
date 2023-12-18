import styled from "styled-components";

export const Container = styled.div`
	background-color: #000000;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	display: grid;
	grid-template-rows: 60px 1fr 50px;
	grid-template-areas: "header" "content" "menu";

	@media (min-width: 768px) {
		grid-template-rows: 1fr;
		grid-template-columns: 75px 1fr;
		grid-template-areas: "menu content";
	}

	@media (min-width: 1024px) {
		grid-template-columns: 250px 1fr;
	}

	@media (min-width: 1440px) {
		grid-template-columns: 345px 1fr;
	}
`;

export const Content = styled.main`
	height: 100%;
	flex-grow: 1;
	grid-area: content;
`;

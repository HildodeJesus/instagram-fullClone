import styled from "styled-components";

export const Navigation = styled.ul<{ orientation: string }>`
	display: flex;
	gap: 8px;
	flex-direction: ${props =>
		props.orientation == "vertical" ? "column" : "row"};
	flex-grow: 1;
	width: 100%;
	height: ${props => (props.orientation == "vertical" ? "auto" : "100%")};

	@media (min-width: 1024px) {
		padding: 0px 10px;
	}
`;

export const NavigationItem = styled.li`
	display: flex;
	gap: 15px;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 1rem;
	font-weight: bold;
	padding: 10px 5px;
	width: 100%;
	cursor: pointer;

	@media (min-width: 768px) {
		&:hover {
			background-color: #191919;
			border-radius: 10px;
		}
	}

	@media (min-width: 1024px) {
		justify-content: start;
	}
`;

export const NavigationPerfilItem = styled.picture`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: blue;
	overflow: hidden;
`;

import styled from "styled-components";

export const MenuFooter = styled.ul`
	display: flex;
	width: 100%;
	height: 56px;
	gap: 15px;
	justify-content: start;
	align-items: center;
	color: white;
	font-size: 1rem;
	font-weight: bold;
	padding: 10px 15px;
	cursor: pointer;

	&:hover {
		background-color: #191919;
		border-radius: 10px;
	}
`;

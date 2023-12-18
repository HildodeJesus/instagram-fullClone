import styled from "styled-components";

export const ConstainerHeader = styled.header`
	grid-area: header;
	display: flex;
	padding: 0 15px;
	border-bottom: 1px solid #191919;
`;

export const HeaderLeft = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
`;
export const HeaderRigth = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	gap: 20px;
	align-items: center;
	justify-content: end;
`;

export const WrapperImage = styled.picture`
	display: flex;
	align-items: center;
	justify-content: start;
	width: 100%;
	flex-grow: 0;
	flex-basis: auto;
	img {
		height: 25px;
	}
`;

import { List } from "@phosphor-icons/react";

import * as S from "./styles";

type FooterProps = {
	menuIsOpen: boolean;
};

export default function Footer({ menuIsOpen }: FooterProps) {
	return (
		<S.MenuFooter>
			<List size={30} color="white" />
			{menuIsOpen && <span>Mais</span>}
		</S.MenuFooter>
	);
}

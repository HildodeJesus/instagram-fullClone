import { useEffect, useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import * as S from "./styles";

export default function Root() {
	const [menuIsOpen, setMenuIsOpen] = useState<boolean>(true);
	const [orientation, setOrientation] = useState<"horizontal" | "vertical">(
		"vertical"
	);

	const handleWindowResize = () => {
		if (window.innerWidth <= 1024) setMenuIsOpen(false);
		else setMenuIsOpen(true);

		if (window.innerWidth < 768) setOrientation("horizontal");
		else setOrientation("vertical");
	};

	useEffect(handleWindowResize, []);
	window.addEventListener("resize", handleWindowResize);

	return (
		<S.Container>
			{orientation == "horizontal" && <Header />}
			<S.Content></S.Content>
			<Menu orientation={orientation} menuIsOpen={menuIsOpen} />
		</S.Container>
	);
}

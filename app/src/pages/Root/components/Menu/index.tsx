import * as S from "./styles";
import instagramLogo from "/logoInstagram.png";
import instagramLogo2 from "/logoInstagram2.png";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

type MenuProps = {
	orientation: "vertical" | "horizontal";
	menuIsOpen: boolean;
};

export default function Menu({ orientation, menuIsOpen }: MenuProps) {
	return (
		<S.ContainerMenu>
			{orientation == "vertical" && (
				<S.WrapperImage>
					{menuIsOpen ? (
						<img src={instagramLogo} alt="Logo do Instagram" />
					) : (
						<img src={instagramLogo2} alt="Logo do Instagram" />
					)}
				</S.WrapperImage>
			)}

			<Navigation menuIsOpen={menuIsOpen} orientation={orientation} />

			{orientation == "vertical" && <Footer menuIsOpen={menuIsOpen} />}
		</S.ContainerMenu>
	);
}

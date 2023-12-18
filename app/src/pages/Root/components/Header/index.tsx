import { Heart, MagnifyingGlass } from "@phosphor-icons/react";
import * as S from "./styles";
import instagramLogo from "/logoInstagram.png";
import instagramLogo2 from "/logoInstagram2.png";

export default function Header() {
	return (
		<S.ConstainerHeader>
			<S.HeaderLeft>
				<S.WrapperImage>
					<img src={instagramLogo} alt="Logo do Instagram" />
				</S.WrapperImage>
			</S.HeaderLeft>
			<S.HeaderRigth>
				<MagnifyingGlass size={25} color="white" />
				<Heart size={25} color="white" />
			</S.HeaderRigth>
		</S.ConstainerHeader>
	);
}

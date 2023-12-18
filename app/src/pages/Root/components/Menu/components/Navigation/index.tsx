import {
	ChatCircleDots,
	Compass,
	FilmReel,
	Heart,
	House,
	MagnifyingGlass,
	PlusCircle,
} from "@phosphor-icons/react";

import * as S from "./styles";

type NavigationProps = {
	menuIsOpen: boolean;
	orientation: "horizontal" | "vertical";
};

export default function Navigation({
	menuIsOpen,
	orientation,
}: NavigationProps) {
	return (
		<S.Navigation orientation={orientation}>
			<S.NavigationItem>
				<House size={30} color="white" />{" "}
				{menuIsOpen && <span>Página inicial</span>}
			</S.NavigationItem>

			{orientation == "vertical" && (
				<S.NavigationItem>
					<MagnifyingGlass size={30} color="white" />
					{menuIsOpen && <span>Pesquisa</span>}
				</S.NavigationItem>
			)}

			<S.NavigationItem>
				<Compass size={30} color="white" />
				{menuIsOpen && <span>Explorar</span>}
			</S.NavigationItem>
			<S.NavigationItem>
				<FilmReel size={30} color="white" />
				{menuIsOpen && <span>Reels</span>}
			</S.NavigationItem>
			<S.NavigationItem>
				<ChatCircleDots size={30} color="white" />
				{menuIsOpen && <span>Mensagens</span>}
			</S.NavigationItem>

			{orientation == "vertical" && (
				<S.NavigationItem>
					<Heart size={30} color="white" />
					{menuIsOpen && <span>Notificações</span>}
				</S.NavigationItem>
			)}

			<S.NavigationItem>
				<PlusCircle size={30} color="white" />
				{menuIsOpen && <span>Criar</span>}
			</S.NavigationItem>
			<S.NavigationItem>
				<S.NavigationPerfilItem />
				{menuIsOpen && <span>Perfil</span>}
			</S.NavigationItem>
		</S.Navigation>
	);
}

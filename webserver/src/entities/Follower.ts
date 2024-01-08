export class Follower {
	public follower_id: string; // Seguido (Quem recebeu o follow)
	public followed_id: string; // Seguidor (Quem deu o follow)
	public created_at?: Date;
	public updated_at?: Date;

	constructor(props: Omit<Follower, "id" | "created_at" | "updated_at">) {
		this.followed_id = props.followed_id;
		this.follower_id = props.follower_id;
		this.created_at = new Date();
		this.updated_at = new Date();
	}
}

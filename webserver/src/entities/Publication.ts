import { v4 } from "uuid";

export class Publication {
	public id?: string;
	public user_id: string;
	public caption: string;
	public post_url: string;
	public type: Date;
	public created_at?: Date;
	public updated_at?: Date;

	constructor(props: Publication) {
		this.id = v4();
		this.user_id = props.user_id;
		this.caption = props.caption;
		this.post_url = props.post_url;
		this.type = props.type;
		this.created_at = new Date();
		this.updated_at = new Date();
	}
}

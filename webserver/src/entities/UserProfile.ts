import { v4 } from "uuid";

export class UserProfile {
	public id?: string;
	public date_of_birth: Date;
	public profile_photo_url: string;
	public bio: string;
	public following: number;
	public followers: number;
	public user_id: string;
	public created_at?: Date;
	public updated_at?: Date;

	constructor(props: UserProfile) {
		this.id = v4();
		this.date_of_birth = props.date_of_birth;
		this.profile_photo_url = props.profile_photo_url;
		this.bio = props.bio;
		this.following = props.following;
		this.followers = props.followers;
		this.user_id = props.user_id;
		this.created_at = new Date();
		this.updated_at = new Date();
	}
}

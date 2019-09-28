export enum StateEnum {
		OPEN = "OPEN",
		CLOSED = "CLOSED",
		MERGED = "MERGED"
}

export type UserProps = {
		name: string;
		login: string;
		email: string;
};

export type CommentProps = {
		id: string;
		bodyText: string;
		author: UserProps;
};

export type DetailsProps = {
		title: string;
		createdAt: string;
		author: UserProps;
		assignees: UserProps[];
		comments?: CommentProps[];
};

export type IdentifierProps = {
		id?: string;
		prNumber: number;
		state: StateEnum;
};

export type CardProps = {
		url: string;
} & DetailsProps & IdentifierProps;

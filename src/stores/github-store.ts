import { observable, action } from 'mobx';
import { ListProps } from '../types/list';

export class GithubStore {
	@observable repository: ListProps[] = [];

	@action
	add( data: ListProps ) {
		this.repository.push(data);
	}

	@action
	set( repository: ListProps[] ) {
		this.repository = repository;
	}
}
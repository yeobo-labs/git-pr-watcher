import { observable, action } from 'mobx';
import { StateEnum } from '../types/card';

export class SettingsStore {
	@observable repositoryList: string[] = [];
	@observable stateList: string[] = [
		StateEnum.OPEN,
		StateEnum.CLOSED,
		StateEnum.MERGED
	];

	@action
	setRepositoryList( repositoryList: string[] ) {
		this.repositoryList = repositoryList;
	}

	@action
	addRepository( repository: string ) {
		this.repositoryList.push(repository);
	}

	@action
	removeRepository( repository: string ) {
		this.repositoryList = this.repositoryList.filter(repo => repo !== repository);
	}

	@action
	setStateList( stateList: string[] ) {
		this.stateList = stateList;
	}

	@action
	addState( state: string ) {
		this.stateList.push(state);
	}

	@action
	removeState( state: string ) {
		this.stateList = this.stateList.filter(s => s !== state);
	}
}

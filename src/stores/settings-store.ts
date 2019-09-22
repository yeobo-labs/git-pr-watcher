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
	isRepositoryExists( repository: string ) {
		return this.repositoryList.includes( repository );
	}

	@action
	setStateList( stateList: string[] ) {
		this.stateList = stateList;
	}

	@action
	isStateExists( state: string ) {
		return this.stateList.includes( state );
	}
}

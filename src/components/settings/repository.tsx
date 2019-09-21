import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { SettingsRepositoryProps } from '../../types/settings';
import Section from './section';

@inject('settingsStore')
@observer
export default class SettingsRepository extends React.Component<SettingsRepositoryProps> {
	constructor(props: SettingsRepositoryProps) {
		super(props);

		this.handleRepositoryCheck = this.handleRepositoryCheck.bind(this);
	}

	handleRepositoryCheck(event: any) {
		const { settingsStore } = this.props;
		const { value, checked } = event.currentTarget;

		if( checked ) {
			settingsStore.addRepository( value );
		}

		return checked
			? settingsStore.addRepository( value )
			: settingsStore.removeRepository( value );
	}

	render() {
		const { items, settingsStore: { repositoryList = [] } } = this.props;

		return (
			<Section
				heading="Repository Settings"
				items={items}
				value={repositoryList}
				onChange={this.handleRepositoryCheck}
			/>
		)
	}
}
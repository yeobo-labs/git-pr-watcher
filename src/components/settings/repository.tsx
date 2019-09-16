import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { SettingsProps } from '../../types/settings';
import Section from './section';

@inject('settingsStore')
@observer
export default class SettingsRepository extends React.Component<SettingsProps> {
	handleRepositoryCheck(event: any) {
		const { settingsStore } = this.props;
		const { value, checked } = event.currentTarget;

		if( checked ) {
			settingsStore.addRepository( value );
		}

		return checked
			? settingsStore.addRepository( value )
			: settingsStore.removeRepository( value )
	}

	render() {
		const { settingsStore: { repositoryList = [] } } = this.props;

		return (
			<Section
				heading="Repository Settings"
				items={repositoryList}
				onClick={this.handleRepositoryCheck}
			/>
		)
	}
}
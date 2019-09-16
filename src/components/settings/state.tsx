import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { SettingsProps } from '../../types/settings';
import Section from './section';

@inject('settingsStore')
@observer
export default class SettingsState extends React.Component<SettingsProps> {
	handleStateCheck(event: any) {
		return () => {
			const { settingsStore } = this.props;
			const { value, checked } = event.currentTarget;

			if( checked ) {
					settingsStore.addState( value );
			}

			return checked
					? settingsStore.addState( value )
					: settingsStore.removeState( value )
		}
	}

	render() {
		const { settingsStore: { stateList = [] } } = this.props;

		return (
			<Section
				heading="State Settings"
				items={stateList}
				onClick={this.handleStateCheck}
			/>
		)
	}
}
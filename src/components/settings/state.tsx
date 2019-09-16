import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { SettingsProps } from '../../types/settings';
import { StateEnum } from '../../types/card';
import Section from './section';

@inject('settingsStore')
@observer
export default class SettingsState extends React.Component<SettingsProps> {
	private states: string[] = [
		StateEnum.OPEN,
		StateEnum.CLOSED,
		StateEnum.MERGED
	];

	constructor(props: SettingsProps) {
		super(props);

		this.handleStateCheck = this.handleStateCheck.bind(this);
	}

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
				items={this.states}
				value={stateList}
				onChange={this.handleStateCheck}
			/>
		)
	}
}
import * as React from 'react';
import { Provider } from 'mobx-react';
import { graphql } from 'gatsby';
import { SettingsStore } from '../stores/settings-store';
import SettingsRepository from '../components/settings/repository';
import SettingsState from '../components/settings/state';

class SettingsPage extends React.Component {
	private settingsStore: SettingsStore = new SettingsStore();

	componentDidMount() {
		const { github: { viewer } } = this.props.data;
		const repositoryList = viewer.repositories.nodes.map((node: any) => node.name);
		this.settingsStore.setRepositoryList(repositoryList);
	}

	render() {
		return (
			<Provider settingsStore={this.settingsStore}>
				<div>
					<h1>Settings</h1>
					<SettingsRepository />
					<SettingsState />
				</div>
			</Provider>
		);
	}
}

export const query = graphql`
	query {
		github {
			viewer {
				repositories(first: 10) {
					nodes {
						name
					}
				}
			}
		}
	}
`;

export default SettingsPage;

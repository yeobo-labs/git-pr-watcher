import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { graphql, StaticQuery } from 'gatsby';
import { StateEnum } from '../../types/card';
import { SettingsProps } from '../../types/settings';
import Section from './section';
import styles from './settings.module.css';

@inject('settingsStore', 'navigationStore')
@observer
class Settings extends React.Component<SettingsProps> {
    private repositoryList: Set<string> = new Set();
    private stateList: Set<string> = new Set([
        StateEnum.OPEN,
        StateEnum.CLOSED,
        StateEnum.MERGED
    ]);
    private states: string[] = [
        StateEnum.OPEN,
        StateEnum.CLOSED,
        StateEnum.MERGED
    ];

    constructor(props: SettingsProps) {
        super(props);

        this.handleRepositoryCheck = this.handleRepositoryCheck.bind(this);
        this.handleStateCheck = this.handleStateCheck.bind(this);
        this.handleSave = this.handleSave.bind(this);
  }

    handleRepositoryCheck(value: string, checked: boolean) {
        (! checked)
            ? this.repositoryList.add(value)
            : this.repositoryList.delete(value);
        this.forceUpdate();
        return;
    }
    
    handleStateCheck(value: string, checked: boolean) {
        (! checked)
            ? this.stateList.add(value)
            : this.stateList.delete(value);
        this.forceUpdate();
        return;
    }
    
    handleSave() {
        const { settingsStore, navigationStore } = this.props;

        settingsStore.setStateList( Array.from(this.stateList.values()) );
        settingsStore.setRepositoryList( Array.from(this.repositoryList.values()) );

        navigationStore.setActivePage( 'List' );
    }

  render() {
    return (
            <StaticQuery
                query={query}
                // tslint:disable-next-line:jsx-no-lambda
                render={({ github: { viewer } }) => {
                    const repositories = viewer.repositories.nodes.map((node: any) => node.name);

                    return (
                        <div>
                            <h1>Settings</h1>
                            <div className={styles.container}>
                                <Section
                                    heading="Repository Settings"
                                    items={repositories}
                                    value={this.repositoryList}
                                    onChange={this.handleRepositoryCheck}
                                />
                                <Section
                                    heading="State Settings"
                                    items={this.states}
                                    value={this.stateList}
                                    onChange={this.handleStateCheck}
                                />
                            </div>
                            <button
                                className={styles.settingsButton}
                                onClick={this.handleSave}
                            >
                                Save
                            </button>
                        </div>
                    );
                }}
            />
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

export default Settings;

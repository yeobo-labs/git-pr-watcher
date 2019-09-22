import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { graphql, StaticQuery } from 'gatsby';
import { StateEnum } from '../../types/card';
import { SettingsProps } from '../../types/settings';
import Section from './section';
import styles from './settings.module.css';

@inject('settingsStore')
@observer
class Settings extends React.Component<SettingsProps> {
    private repositoryList: string[] = [];
    private stateList: string[] = [];
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

    handleRepositoryCheck(event: any) {
		const { value, checked } = event.currentTarget;

		return checked
			? this.repositoryList.push( value )
			: this.repositoryList.filter( repo => repo !== value );
    }
    
    handleStateCheck(event: any) {
		return () => {
			const { value, checked } = event.currentTarget;

			return checked
                ? this.stateList.push( value )
                : this.stateList.filter( state => state !== value );
		}
    }
    
    handleSave() {
        const { settingsStore } = this.props;

        settingsStore.setStateList( this.stateList );
        settingsStore.setRepositoryList( this.repositoryList );
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

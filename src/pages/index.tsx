import * as React from 'react';
import { observer, Provider } from 'mobx-react';
import { GithubStore } from '../stores/github-store';
import { SettingsStore } from '../stores/settings-store';
import { NavigationStore } from '../stores/navigation-store';
import Head from '../components/head';
import Navigation from '../components/navigation';
import Banner from '../components/banner';
import List from '../components/list';
import Settings from '../components/settings';

@observer
class IndexPage extends React.Component {
  private githubStore: GithubStore = new GithubStore();
  private settingsStore: SettingsStore = new SettingsStore();
  private navigationStore: NavigationStore = new NavigationStore();

  render() {
    return (
      <Provider
        githubStore={this.githubStore}
        settingsStore={this.settingsStore}
        navigationStore={this.navigationStore}
      >
        <div>
          <Head
            title="GitHub PRoll"
            description="Compact list of all your GitHub pull-requests - in one view!"
            lang="en"
          />
          <Navigation />
          <Banner />
          <main>
            {this.settingsStore.repositoryList.length === 0
              ? <Settings />
              : <List />
            }
          </main>
        </div>
      </Provider>
    );
  }
}

export default IndexPage;

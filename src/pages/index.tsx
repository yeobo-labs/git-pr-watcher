import * as React from 'react';
import { observer, Provider } from 'mobx-react';
import { GithubStore } from '../stores/github-store';
import { SettingsStore } from '../stores/settings-store';
import Head from '../components/head';
import List from '../components/list';
import Settings from '../components/settings';

@observer
class IndexPage extends React.Component {
  private githubStore: GithubStore = new GithubStore();
  private settingsStore: SettingsStore = new SettingsStore();

  render() {
    return (
      <Provider githubStore={this.githubStore} settingsStore={this.settingsStore}>
        <div>
          <Head title="Git PR Watcher" description="App that listens to Git PR updates" lang="en" />
          {this.settingsStore.repositoryList.length === 0
            ? <Settings />
            : <List />
          }
        </div>
      </Provider>
    );
  }
}

export default IndexPage;

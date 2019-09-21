import * as React from 'react';
import { Provider } from 'mobx-react';
import { GithubStore } from '../stores/github-store';
import Head from '../components/head';
import List from '../components/list';

class IndexPage extends React.Component {
  private githubStore: GithubStore = new GithubStore()

  render() {
    return (
      <Provider githubStore={this.githubStore}>
        <div>
          <Head title="Git PR Watcher" description="App that listens to Git PR updates" lang="en" />
          {this.githubStore.repository.map((repo, index) => (
            <List key={`repository-${index}`} {...repo} />
          ))}
        </div>
      </Provider>
    );
  }
}

export default IndexPage;

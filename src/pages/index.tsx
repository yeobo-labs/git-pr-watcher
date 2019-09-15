import * as React from 'react';
import { Provider } from 'mobx-react';
import { PRStore } from '../stores/pull-request-store';
import Head from '../components/head';
import List from '../components/list';

class IndexPage extends React.Component {
  private prStore: PRStore = new PRStore()

  render() {
    return (
      <Provider prStore={this.prStore}>
        <div>
          <Head title="Git PR Watcher" description="App that listens to Git PR updates" lang="en" />
          <h1>Hello world!</h1>
          <List heading="List Heading" />
        </div>
      </Provider>
    );
  }
}

export default IndexPage;

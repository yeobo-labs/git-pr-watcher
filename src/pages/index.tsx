import * as React from 'react';
import { observer } from 'mobx-react';
// import * as store from '../stores/pull-request-store';
import Head from '../components/head';
import List from '../components/list';

@observer
class IndexPage extends React.Component {
  render() {
    return (
      <>
        <Head title="Git PR Watcher" description="App that listens to Git PR updates" lang="en" />
        <h1>Hello world!</h1>
        <List heading="List Heading" items={[]} />
      </>
    );
  }
}

export default IndexPage;

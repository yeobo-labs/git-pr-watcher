import * as React from 'react';

import Head from '../components/head';
import { List } from '../components/list/index';

const IndexPage = () => (
  <>
    <Head title="Git PR Watcher" description="App that listens to Git PR updates" lang="en" />
    <h1>Hello world!</h1>
    <List heading="List Heading" items={[
      { id: 1, content: 'a' },
      { id: 2, content: 'b' }
    ]} />
  </>
);

export default IndexPage;

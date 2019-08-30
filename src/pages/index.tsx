import * as React from 'react';
import * as moment from 'moment';
import Head from '../components/head';
import Card from '../components/card/index';

const mockData = [
  {
    prNumber: 1,
    url: 'https://github.com',
    title: 'PR #1',
    author: 'author',
    assignee: 'assignee',
    status: 'open',
    date: moment().format('LLL'),
  },
  {
    prNumber: 2,
    url: 'https://github.com',
    title: 'PR #1',
    author: 'author',
    assignee: 'assignee',
    status: 'open',
    date: moment().format('LLL'),
  },
  {
    prNumber: 3,
    url: 'https://github.com',
    title: 'PR #1',
    author: 'author',
    assignee: 'assignee',
    status: 'closed',
    date: moment().format('LLL'),
  }
]

const IndexPage = () => (
  <>
    <Head title="Git PR Watcher" description="App that listens to Git PR updates" lang="en" />
    <h1>Hello world!</h1>
    {mockData.map(data => <Card key={`pr-${data.prNumber}`} {...data} />)}
  </>
);

export default IndexPage;

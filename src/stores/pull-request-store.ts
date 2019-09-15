import * as moment from 'moment';
import { observable, action } from 'mobx';
import { CardProps } from '../components/card'

export class PRStore {
  @observable items: CardProps[] = [
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
  ];

  @action
  add( data: CardProps ) {
    this.items.push(data);
  }
}
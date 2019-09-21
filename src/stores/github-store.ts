import * as moment from 'moment';
import { observable, action } from 'mobx';
import { ListProps } from '../types/list';
import { StateEnum } from '../types/card';

export class GithubStore {
  @observable repository: ListProps[] = [
    {
      name: 'Repository 1',
      items: [
        {
          prNumber: 1,
          url: 'https://github.com',
          title: 'PR #1',
          author: {
            name: 'author'
          },
          assignees: [
            {
              name: 'assignee'
            }
          ],
          state: StateEnum.OPEN,
          createdAt: moment().format('LLL'),
        },
        {
          prNumber: 2,
          url: 'https://github.com',
          title: 'PR #1',
          author: {
            name: 'author'
          },
          assignees: [
            {
              name: 'assignee'
            }
          ],
          state: StateEnum.OPEN,
          createdAt: moment().format('LLL'),
        },
        {
          prNumber: 3,
          url: 'https://github.com',
          title: 'PR #1',
          author: {
            name: 'author'
          },
          assignees: [
            {
              name: 'assignee'
            }
          ],
          state: StateEnum.CLOSED,
          createdAt: moment().format('LLL'),
        }
      ]
    },
    {
      name: 'Repository 2',
      items: [],
    }
  ];

  @action
  add( data: ListProps ) {
    this.repository.push(data);
  }
}
import * as React from 'react';
import { DiGitPullRequest } from 'react-icons/di';
import { ListHeaderProps } from '../../types/list';
import listStyles from './list.module.css';

export default class ListHeader extends React.Component<ListHeaderProps> {
  render() {
    const { name } = this.props;

    return (
      <div className={listStyles.listHeading}>
        <DiGitPullRequest size={'32px'} />
        <div className={listStyles.listTitle}>{name}</div>
      </div>
    );
  }
}

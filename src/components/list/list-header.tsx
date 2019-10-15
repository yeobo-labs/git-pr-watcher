import * as React from 'react';
import classNames from 'classnames';
import { DiGitPullRequest } from 'react-icons/di';
import { MdSearch} from 'react-icons/md';
import { ListHeaderProps } from '../../types/list';
import listStyles from './list.module.css';

export default class ListHeader extends React.Component<ListHeaderProps> {
  render() {
    const { name, filterText } = this.props;

    return (
      <div className={listStyles.listHeading}>
        <div className={listStyles.listHeadingComponent}>
          <DiGitPullRequest size={'32px'} />
          <div className={listStyles.listTitle}>{name}</div>
        </div>
        <div className={listStyles.listHeadingComponent}>
          <div className={classNames(listStyles.listHeadingComponent, listStyles.listFilterContainer)}>
            <input
              placeholder={'Filter list'}
              value={filterText}
              className={listStyles.listFilterInput}
            />
            <MdSearch />
          </div>
        </div>
      </div>
    );
  }
}

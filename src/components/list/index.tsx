import * as React from 'react';
import { DiGitPullRequest } from 'react-icons/di';
import { observer, inject } from 'mobx-react';
import { PRStore } from '../../stores/pull-request-store';
import Card, { CardProps } from '../card';
import listStyles from './list.module.css';

export type ListProps = {
    heading: string;
};

@inject('prStore')
@observer
export default class List extends React.Component<ListProps & { prStore: PRStore }> {
    render() {
        const { heading, prStore: { items } } = this.props;

        return (<div className={listStyles.list}>
            <div className={listStyles.listHeading}>
                <DiGitPullRequest size={'32px'} />
                <div className={listStyles.listTitle}>{heading}</div>
            </div>
            {items.map((item: CardProps) => (<Card key={`pr-${item.prNumber}`} {...item} />))}
        </div>);
    }
}

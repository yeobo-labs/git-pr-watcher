import * as React from 'react';
import { DiGitPullRequest } from 'react-icons/di';
import Card, { CardProps } from '../card/index';
import listStyles from './list.module.css';

export type ListProps = {
    heading: string;
    items: CardProps[];
};

export default class List extends React.Component<ListProps> {
    render() {
        const { heading, items } = this.props;

        return (<div className={listStyles.list}>
            <div className={listStyles.listHeading}>
                <DiGitPullRequest size={'32px'} />
                <div className={listStyles.listTitle}>{heading}</div>
            </div>
            {items.map(item => (<Card key={`pr-${item.prNumber}`} {...item} />))}
        </div>);
    }
}

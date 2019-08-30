import * as React from 'react';
import { DiGitPullRequest } from 'react-icons/di';
import listStyles from './list.module.css';

export type ListProps = {
    heading: string;
    items: object[];
};

export class List extends React.Component<ListProps> {
    render() {
        const { heading, items } = this.props;

        return (<div className={listStyles.list}>
            <div className={listStyles.listHeading}>
                <DiGitPullRequest size={'32px'} />
                <div className={listStyles.listTitle}>{heading}</div>
            </div>
            {items.map(item => (<p>{JSON.stringify(item)}</p>))}
        </div>);
    }
}

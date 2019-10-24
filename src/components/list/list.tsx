import * as React from 'react';
import { DiGitPullRequest } from 'react-icons/di';
import { observer } from 'mobx-react';
import { ListProps } from '../../types/list';
import { CardProps } from '../../types/card';
import Card from '../card';
import styles from './list.module.css';

@observer
export default class List extends React.Component<ListProps> {
    render() {
        const { name = '', items = [] } = this.props;

        return (<div className={styles.list}>
            <div className={styles.listHeading}>
                <DiGitPullRequest size={'32px'} />
                <div className={styles.listTitle}>{name}</div>
            </div>
            {items.map((item: CardProps) => (
                <div className={styles.listItem} key={`${name}-${item.prNumber}`}>
                    <Card {...item} />
                </div>
            ))}
        </div>);
    }
}

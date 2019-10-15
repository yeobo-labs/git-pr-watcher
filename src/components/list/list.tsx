import * as React from 'react';
import { observer } from 'mobx-react';
import { ListProps } from '../../types/list';
import { CardProps } from '../../types/card';
import Card from '../card';
import ListHeader from './list-header';
import listStyles from './list.module.css';

@observer
export default class List extends React.Component<ListProps> {
    render() {
        const { header: { name, filterText = '' }, items = [] } = this.props;

        return (<div className={listStyles.list}>
            <ListHeader name={name} filterText={filterText} />
            {items.map((item: CardProps) => (<Card key={`pr-${item.prNumber}`} {...item} />))}
        </div>);
    }
}

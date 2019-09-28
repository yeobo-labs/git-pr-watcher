import * as React from 'react';
import { DiGitPullRequest } from 'react-icons/di';
import { observer } from 'mobx-react';
import { ListProps } from '../../types/list';
import { CardProps } from '../../types/card';
import Card from '../card';
import listStyles from './list.module.css';

@observer
export default class List extends React.Component<ListProps> {
		render() {
				const { name = '', items = [] } = this.props;

				return (<div className={listStyles.list}>
						<div className={listStyles.listHeading}>
								<DiGitPullRequest size={'32px'} />
								<div className={listStyles.listTitle}>{name}</div>
						</div>
						{items.map((item: CardProps) => (<Card key={`pr-${item.prNumber}`} {...item} />))}
				</div>);
		}
}

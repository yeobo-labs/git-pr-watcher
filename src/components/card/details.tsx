import * as React from 'react';
import * as moment from 'moment';
import { DetailsProps } from '../../types/card';
import cardStyles from './card.module.css';

export class Details extends React.Component<DetailsProps> {
	render() {
		const { title, author, assignees, createdAt } = this.props;

		return (
			<div className={cardStyles.cardDetails}>
				<div className={cardStyles.textTitle}>{title}</div>
				<div>
					<label>Author:</label>
					{author.name}
				</div>
				<div>
					<label>Assignees:</label>
					{assignees.map(assignee => assignee.name).join(', ')}
				</div>
				<div className={cardStyles.textDate}>{moment(createdAt).format('LLL')}</div>
			</div>
		);
	}
}

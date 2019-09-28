import * as React from 'react';
import classNames from 'classnames';
import { IdentifierProps } from '../../types/card';
import cardStyles from './card.module.css';

export class Identifier extends React.Component<IdentifierProps> {
	render() {
		const { prNumber, state } = this.props;

		const className = classNames(cardStyles.cardIdentifier, cardStyles[`${state.toLowerCase()}Status`]);
		return (
			<div className={className}>
				{prNumber}
			</div>
		);
	}
}

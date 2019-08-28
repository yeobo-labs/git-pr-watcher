import * as React from 'react';
import classNames from 'classnames';
import cardStyles from './card.module.css';

export type IdentifierProps = {
  prNumber: number;
  status: string;
}

export class Identifier extends React.Component<IdentifierProps> {
  render() {
    const { prNumber, status } = this.props;

    return (
      <div className={classNames(cardStyles.cardIdentifier, cardStyles[`${status}Status`])}>
        {prNumber}
      </div>
    );
  }
}

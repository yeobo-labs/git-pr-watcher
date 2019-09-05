import * as React from 'react';
import { Details, DetailsProps } from './details';
import { Identifier, IdentifierProps } from './identifier';
import cardStyles from './card.module.css';

export type CardProps = {
  url: string;
} & DetailsProps & IdentifierProps;

export default class Card extends React.Component<CardProps> {
  render() {
    const { prNumber, title, author, assignee, status, date } = this.props;
    return (
      <div className={cardStyles.card}>
        <Identifier prNumber={prNumber} status={status} />
        <Details title={title} author={author} assignee={assignee} date={date} />
      </div>
    );
  }
}

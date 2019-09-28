import * as React from 'react';
import { CardProps } from '../../types/card';
import { Details } from './details';
import { Identifier } from './identifier';
import cardStyles from './card.module.css';

export default class Card extends React.Component<CardProps> {
  render() {
    const { prNumber, title, author, assignees, state, createdAt } = this.props;
    return (
      <div className={cardStyles.card}>
        <Identifier prNumber={prNumber} state={state} />
        <Details title={title} author={author} assignees={assignees} createdAt={createdAt} />
      </div>
    );
  }
}

import * as React from 'react';
import cardStyles from './card.module.css';

export type DetailsProps = {
  title: string;
  author: string;
  assignee: string;
  date: string;
}

export class Details extends React.Component<DetailsProps> {
  render() {
    const { title, author, assignee, date } = this.props;

    return (
      <div className={cardStyles.cardDetails}>
        <div className={cardStyles.textTitle}>{title}</div>
        <div>
          <label>Author:</label>
          {author}
        </div>
        <div>
          <label>Assignee:</label>
          {assignee}
        </div>
        <div className={cardStyles.textDate}>{date}</div>
      </div>
    );
  }
}

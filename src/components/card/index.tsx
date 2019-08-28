import * as React from 'react';
import { Details, DetailsProps } from './details';
import { Identifier, IdentifierProps } from './identifier';

export type CardProps = {
  url: string;
  comments?: [];
} & DetailsProps & IdentifierProps;

export class Card extends React.Component<CardProps> {
  render() {
    const { prNumber, title, url, author, assignee, status, comments } = this.props;
    return (
      <a href={url}>
        <Identifier prNumber={prNumber} status={status} />
        <Details title={title} author={author} assignee={assignee} />
        {JSON.stringify(comments)}
      </a>
    );
  }
}

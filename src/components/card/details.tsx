import * as React from 'react';

export type DetailsProps = {
  title: string;
  author: string;
  assignee: string;
}

export class Details extends React.Component<DetailsProps> {
  render() {
    const { title, author, assignee } = this.props;

    return (
      <div>
        <h3>{title}</h3>
        <span>{author}</span>
        <span>{assignee}</span>
      </div>
    );
  }
}

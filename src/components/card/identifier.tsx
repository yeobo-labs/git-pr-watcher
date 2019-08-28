import * as React from 'react';

export type IdentifierProps = {
  prNumber: number;
  status: string;
}

export class Identifier extends React.Component<IdentifierProps> {
  render() {
    const { prNumber, status } = this.props;

    return (
      <div>
        <span>{prNumber}</span>
        <span>{status}</span>
      </div>
    );
  }
}

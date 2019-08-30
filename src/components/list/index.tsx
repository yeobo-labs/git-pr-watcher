import * as React from 'react';

export type ListProps = {
    heading: string;
    items: object[];
};

export class List extends React.Component<ListProps> {
    render() {
        const { heading, items } = this.props;

        return (<div>
            <h3>{heading}</h3>
            {items.map(item => JSON.stringify(item))}
        </div>);
    }
}

import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { inject, observer } from 'mobx-react';
import { ListPageProps, ListProps } from '../../types/list';
import List from './list';

@inject('settingsStore', 'githubStore')
@observer
class ListPage extends React.Component<ListPageProps> {
    render() {
        const { settingsStore, githubStore } = this.props;

        return (
            <StaticQuery
                query={query}
                // tslint:disable-next-line:jsx-no-lambda
                render={({github: {viewer: {pullRequests}}}) => {
                    const lists = pullRequests.nodes.reduce((data: ListProps[], pr: any) => {
                        const { repository: { name }, state } = pr;
                        if(! settingsStore.isRepositoryExists(name) || ! settingsStore.isStateExists(state)) {
                            return data;
                        }

                        const prData = {
                            ...pr,
                            assignees: pr.assignees.nodes || [],
                            comments: pr.comments.nodes || [],
                        };
                        const repository = data.find(list => list.name === name);
                        !repository
                            ? data.push({ name, items: [ prData ] })
                            : (repository.items || []).push(prData);

                        return data;
                    }, []);

                    githubStore.set( lists );

                    return (
                        <div>
                            {lists.map( ( {name, items}: ListProps ) => (
                                <List key={`list-${name}`} name={name} items={items} />)
                            )}
                        </div>
                    );
                }}
            />
        );
    }
}

export const query = graphql`
    query {
        github {
            viewer {
                pullRequests(last: 100) {
                    nodes {
                        id
                        prNumber: number
                        state
                        title
                        createdAt
                        author {
                            login
                            ... on GitHub_User {
                                email
                                name
                            }
                        }
                        assignees(first: 10) {
                            nodes {
                                name
                                login
                                email
                            }
                        }
                        comments(last: 10) {
                            nodes {
                                id
                                bodyText
                                author {
                                    login
                                    ... on GitHub_User {
                                        email
                                        name
                                    }
                                }
                            }
                        }
                        repository {
                            name
                        }
                    }
                }
            }
        }
    }
`;

export default ListPage;

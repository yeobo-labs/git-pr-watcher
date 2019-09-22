import * as React from 'react';
// import { DiGitPullRequest } from 'react-icons/di';
import { inject, observer } from 'mobx-react';
// import { ListProps } from '../../types/list';
// import { CardProps } from '../../types/card';
// import Card from '../card';
// import listStyles from './list.module.css';

@inject('settingsStore')
@observer
export default class List extends React.Component {
    render() {
        return (
            <div>
                List
            </div>
        );
    }
}

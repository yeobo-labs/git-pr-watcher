import * as React from 'react';
import classNames from 'classnames';
import { observer, inject } from 'mobx-react';
import { NavigationProps, PagesEnum } from '../../types/navigation';
import styles from './navigation.module.css';

// tslint:disable: jsx-no-lambda
@inject('navigationStore')
@observer
class Navigation extends React.Component<NavigationProps> {
    private navigationList = [ PagesEnum.HOME, PagesEnum.LIST, PagesEnum.SETTINGS ];

    constructor(props: NavigationProps) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick( value: string ) {
        const { navigationStore } = this.props;
        navigationStore.setActivePage( value );
    }

    render() {
        const { navigationStore } = this.props;

        return (
            <div className={styles.container}>
                <ul className={styles.navItems}>
                    <li className={classNames(styles.navItem, styles.navItemLogo)}>
                        <img src="/assets/logo.png" className={styles.logo} />
                    </li>
                    {this.navigationList.map((page: string) => {
                        const className = navigationStore.activePage === page
                            ? classNames(styles.navItem, styles.navItemActive)
                            : styles.navItem;

                        return (<li
                            key={`navigation-${page}`}
                            className={className}
                            onClick={() => this.handleClick(page)}
                        >
                            {page}
                        </li>);
                    })}
                </ul>
            </div>
        );
    }
}

export default Navigation;
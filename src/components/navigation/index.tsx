import * as React from 'react';
import classNames from 'classnames';
import styles from './navigation.module.css';

const Navigation = () => (
    <div className={styles.container}>
        <ul className={styles.navItems}>
            <li className={classNames(styles.navItem, styles.navItemLogo)}>
                <img src="/assets/logo.png" className={styles.logo} />
            </li>
            <li className={styles.navItem}>Home</li>
            <li className={styles.navItem}>Settings</li>
        </ul>
    </div>
);

export default Navigation;
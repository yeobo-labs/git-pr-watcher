import * as React from 'react';
import { SettingsSectionProps } from '../../types/settings';
import styles from './settings.module.css';

const Section = ({ heading, items, onClick }: SettingsSectionProps) => (
	<div className={styles.settings}>
		<div className={styles.settingsHeading}>{heading}</div>
		<div className={styles.settingsItemList}>
			{items.map((it: string, index: number) => (
				<div key={`settings-section-item-${index}`} className={styles.settingsItem}>
					<input type="checkbox" value={it} onClick={onClick} />
					<label className={styles.settingsLabel}>{it}</label>
				</div>
			))}
		</div>
	</div>
);

export default Section;

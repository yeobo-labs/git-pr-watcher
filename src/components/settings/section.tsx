import * as React from 'react';
import { SettingsSectionProps } from '../../types/settings';
import styles from './settings.module.css';

const Section = ({ heading, items, value, onChange }: SettingsSectionProps) => (
  <div className={styles.settings}>
    <div className={styles.settingsHeading}>{heading}</div>
    <div className={styles.settingsItemList}>
      <form>
        {items.map((it: string, index: number) => (
          <div key={`settings-section-item-${index}`} className={styles.settingsItem}>
            <input type="checkbox" value={it} onChange={onChange} defaultChecked={value.includes(it)} />
            <label className={styles.settingsLabel}>{it}</label>
          </div>
        ))}
      </form>
    </div>
  </div>
);

export default Section;

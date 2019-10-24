import * as React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { SettingsSectionProps } from '../../types/settings';
import styles from './settings.module.css';

const Section = ({ heading, items, value, onChange }: SettingsSectionProps) => (
  <div className={styles.settings}>
    <div className={styles.settingsHeading}>{heading}</div>
    <div className={styles.settingsItemList}>
      <form>
        {items.map((it: string, index: number) => (
          <div
            key={`settings-section-item-${index}`}
            className={styles.settingsItem}
            // tslint:disable-next-line: jsx-no-lambda
            onClick={() => onChange(it, value.has(it))}
          >
            {value.has(it) ? <MdCheckBox size={'16px'} /> : <MdCheckBoxOutlineBlank size={'16px'} />}
            <span className={styles.settingsLabel}>{it}</span>
          </div>
        ))}
      </form>
    </div>
  </div>
);

export default Section;

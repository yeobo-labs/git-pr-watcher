import { SettingsStore } from '../stores/settings-store';

export type SettingsProps = {
  settingsStore: SettingsStore;
};

export type SettingsSectionProps = {
  heading: string;
  items: string[];
  value: Set<string>;
  onChange: any;
};

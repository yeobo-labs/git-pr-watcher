import { SettingsStore } from '../stores/settings-store';
import { NavigationStore } from '../stores/navigation-store';

export type SettingsProps = {
  settingsStore: SettingsStore;
  navigationStore: NavigationStore;
};

export type SettingsSectionProps = {
  heading: string;
  items: string[];
  value: Set<string>;
  onChange: any;
};

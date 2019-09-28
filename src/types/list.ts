import { CardProps } from './card';
import { SettingsStore } from '../stores/settings-store';

/**
 * Represents a list of pull requests
 * 
 * name - repository name
 * items - pull request list
 */
export type ListProps = {
    name?: string;
    items?: CardProps[];
};

export type ListPageProps = {
    settingsStore?: 
};

import { CardProps } from './card';
import { SettingsStore } from '../stores/settings-store';
import { GithubStore } from '../stores/github-store';

export type ListHeaderProps = {
    name: string;
    filterText?: string | '';
    sortOrder?: string | 'ASC';
    handleSetFilter(name: string, filterText: string): void;
};

export type ListProps = {
    items?: CardProps[];
} & ListHeaderProps;

export type ListPageProps = {
    settingsStore?: SettingsStore;
    githubStore?: GithubStore;
};

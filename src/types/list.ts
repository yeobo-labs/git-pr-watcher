import { CardProps } from './card';
import { SettingsStore } from '../stores/settings-store';
import { GithubStore } from '../stores/github-store';

export type ListHeaderProps = {
    name: string;
    filterText?: string | '';
    sortOrder?: string | 'ASC';
};

export type ListProps = {
    header: ListHeaderProps;
    items?: CardProps[];
};

export type ListPageProps = {
    settingsStore?: SettingsStore;
    githubStore?: GithubStore;
};

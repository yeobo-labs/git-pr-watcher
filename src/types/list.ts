import { CardProps } from './card';

/**
 * Represents a list of pull requests
 * 
 * name - repository name
 * prStore - pull request list
 */
export type ListProps = {
    name?: string;
    items?: CardProps[];
};

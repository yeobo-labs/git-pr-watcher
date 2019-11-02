import { NavigationStore } from '../stores/navigation-store';

export type NavigationProps = {
  navigationStore: NavigationStore;
};

export enum PagesEnum {
  HOME = "Home",
  LIST = "List",
  SETTINGS = "Settings"
}

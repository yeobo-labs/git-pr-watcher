import { observable, action, toJS } from 'mobx';
import { PagesEnum } from '../types/navigation';

export class NavigationStore {
  @observable activePage: string = PagesEnum.HOME;

  @action
  setActivePage( page: string ) {
    this.activePage = page;
  }

}

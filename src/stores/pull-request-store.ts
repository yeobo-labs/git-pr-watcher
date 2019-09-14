import { observable, action } from 'mobx';
import { CardProps } from '../components/card'

export class PRStore {
  @observable items: CardProps[] = [];

  @action
  add( data: CardProps ) {
    this.items.push(data);
  }
}
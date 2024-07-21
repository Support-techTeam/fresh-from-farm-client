/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { configure, makeAutoObservable, runInAction } from 'mobx';
import RootStore from './RootStore';
import axios from 'axios';

configure({ enforceActions: 'always' });

interface Order {
  id: number;
  product: string;
  quantity: number;
}

export class OrderStore {
  orders: Order[] = [];
  rootStore: typeof RootStore;

  constructor(rootStore: typeof RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  addOrder(order: Order) {
    try {
    } catch (error: any) {
    } finally {
    }
    this.orders.push(order);
  }
}

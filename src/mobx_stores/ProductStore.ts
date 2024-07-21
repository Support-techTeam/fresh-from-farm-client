/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { configure, makeAutoObservable, runInAction } from 'mobx';
import RootStore from './RootStore';
import axios from 'axios';

configure({ enforceActions: 'always' });

interface Product {
  id: number;
  name: string;
  price: number;
}

export class ProductStore {
  products: Product[] = [];
  rootStore: typeof RootStore;

  constructor(rootStore: typeof RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setProducts(products: Product[]) {
    try {
    } catch (error: any) {
    } finally {
    }
    this.products = products;
  }
}

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { configure, makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';
import { RootStore } from './RootStore';
import BaseDirectories from '../base_directory/BaseDirectory';

configure({ enforceActions: 'always' });

export class ProductStore {
  products: any = [];
  categories: any = [];
  loading = false;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  getAllProducts() {
    this.setIsLoading(true);
    axios
      .get(`${BaseDirectories.BASE_API_URL}/users/products`)
      .then((response) => {
        console.debug(response.data.data, 'response.data');
        this.setProducts(response.data.data);
        // runInAction(() => {
        //   this.setProducts(response.data.data);
        // });
      })
      .catch((error) => {
        console.debug(error);
      })
      .finally(() => {
        runInAction(() => {
          this.setIsLoading(false);
        });
      });
  }

  getAllCategories() {
    axios
      .get(`${BaseDirectories.BASE_API_URL}/users/categories`)
      .then((response) => {
        // console.debug(response.data.data, 'response.data');
        this.setCategories(response.data.data);
        // runInAction(() => {
        //   this.setCategories(response.data.data);
        // });
      })
      .catch((error) => {
        console.debug(error);
      });
  }

  setProducts = (res: any) => {
    this.products = res;
  };

  setCategories = (res: any) => {
    this.categories = res;
  };

  setIsLoading = (val: boolean) => {
    this.loading = val;
  };
}

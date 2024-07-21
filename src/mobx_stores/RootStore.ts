import { ProfileStore } from './ProfileStore';
import { OrderStore } from './OrderStore';
import { ProductStore } from './ProductStore';
import { AuthStore } from './AuthStore';

export class RootStore {
  authStore: AuthStore;
  profileStore: ProfileStore;
  orderStore: OrderStore;
  productStore: ProductStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.profileStore = new ProfileStore(this);
    this.orderStore = new OrderStore(this);
    this.productStore = new ProductStore(this);
  }
}

// Create an instance of RootStore
const rootStore = new RootStore();
export default rootStore;

// Define the RootStore type
export type RootStoreType = RootStore;

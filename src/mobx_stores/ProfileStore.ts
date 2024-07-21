/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { configure, makeAutoObservable, runInAction } from 'mobx';
import RootStore from './RootStore';
import axios from 'axios';

configure({ enforceActions: 'always' });

interface Profile {
  name?: string;
  age?: number;
}

export class ProfileStore {
  profile: Profile = {};
  rootStore: typeof RootStore;

  constructor(rootStore: typeof RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setProfile(profile: Profile) {
    try {
    } catch (error: any) {
    } finally {
    }
    this.profile = profile;
  }
}

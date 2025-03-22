import { makeAutoObservable } from "mobx";

import { UserStore } from "./UserStore";

export interface ISerializedRootStore {}

export default class RootStore {
  static instance?: RootStore;
  userStore: UserStore;

  private constructor() {
    this.userStore = new UserStore(this);
    makeAutoObservable(this);
  }

  static create = () => {
    if (!RootStore.instance) {
      RootStore.instance = new RootStore();
    }

    return RootStore.instance;
  };
}

import { makeAutoObservable } from "mobx";

export interface ISerializedRootStore {}

export default class RootStore {
  static instance?: RootStore;

  private constructor() {
    makeAutoObservable(this);
  }

  static create = () => {
    if (!RootStore.instance) {
      RootStore.instance = new RootStore();
    }

    return RootStore.instance;
  };
}

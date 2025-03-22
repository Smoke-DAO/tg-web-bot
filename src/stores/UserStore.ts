import { makeAutoObservable, runInAction } from "mobx";

import { userApi } from "../services/api";

import RootStore from "./RootStore";

export type UserProfile = {
  id: number;
  firstName: string;
  username?: string;
  balance: number;
  level: string;
  daysWithUs: number;
  givenProofOfPuffsCount: number;
  takenProofOfPuffsCount: number;
};

export class UserStore {
  profile: UserProfile | null = null;
  isLoading: boolean = false;
  error: string | null = null;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  loadProfile = async () => {
    this.isLoading = true;
    this.error = null;

    try {
      const profileData = await userApi.fetchProfile();
      runInAction(() => {
        this.profile = profileData;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error instanceof Error ? error.message : "Unknown error";
        this.isLoading = false;
      });
      console.error(error);
    }
  };
}

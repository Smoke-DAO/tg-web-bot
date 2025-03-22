import React from "react";

import RootStore from "./RootStore";
import { storesContext } from "./useStores";

interface RootStoreProviderProps {
  children: React.ReactNode;
}

export const RootStoreProvider: React.FC<RootStoreProviderProps> = ({ children }) => {
  const rootStore = React.useMemo(() => RootStore.create(), []);

  return <storesContext.Provider value={rootStore}>{children}</storesContext.Provider>;
};

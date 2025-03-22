import * as React from "react";
import { observer } from "mobx-react-lite";

import { useStores } from "../../stores/useStores";

import { AuthorizedProfile } from "./AuthorizedProfile";
import { UnauthorizedProfile } from "./UnauthorizedProfile";

export const ProfileScreen: React.FC = observer(() => {
  const { userStore } = useStores();

  const handleConnect = React.useCallback(() => {
    userStore.loadProfile();
  }, [userStore]);

  const handleStake = React.useCallback(() => {
    // TODO: Implement staking
    console.log("Stake clicked");
  }, []);

  const handleMint = React.useCallback(() => {
    // TODO: Implement minting
    console.log("Mint clicked");
  }, []);

  // Show loading state
  if (userStore.isLoading) {
    return <div>Loading profile...</div>;
  }

  // If no profile or error, show unauthorized view
  if (userStore.profile === null) {
    return <UnauthorizedProfile onConnect={handleConnect} />;
  }

  // Show authorized profile when data is available
  return (
    <AuthorizedProfile
      balance={userStore.profile.balance}
      role={userStore.profile.level}
      stats={{
        daysWithUs: userStore.profile.daysWithUs,
        givenProofOfPuffsCount: userStore.profile.givenProofOfPuffsCount,
        takenProofOfPuffsCount: userStore.profile.takenProofOfPuffsCount
      }}
      username={userStore.profile.username || userStore.profile.firstName}
      onMint={handleMint}
      onStake={handleStake}
    />
  );
});

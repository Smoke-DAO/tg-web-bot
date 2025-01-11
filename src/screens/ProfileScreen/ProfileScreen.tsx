import * as React from "react";

import { AuthorizedProfile } from "./AuthorizedProfile";
import { UnauthorizedProfile } from "./UnauthorizedProfile";

export const ProfileScreen: React.FC = () => {
  const [isConnected, setIsConnected] = React.useState(false);

  const handleConnect = React.useCallback(() => {
    // TODO: Implement wallet connection
    setIsConnected(true);
  }, []);

  const handleStake = React.useCallback(() => {
    // TODO: Implement staking
    console.log("Stake clicked");
  }, []);

  const handleMint = React.useCallback(() => {
    // TODO: Implement minting
    console.log("Mint clicked");
  }, []);

  if (!isConnected) {
    return <UnauthorizedProfile onConnect={handleConnect} />;
  }

  return (
    <AuthorizedProfile
      referrals={1407}
      role="Validator lvl.3"
      stats={{
        totalSmoken: 14880,
        totalSjoint: 155,
        totalStaked: 155
      }}
      username="Kattishhha"
      onMint={handleMint}
      onStake={handleStake}
    />
  );
};

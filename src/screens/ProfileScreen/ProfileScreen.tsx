import * as React from "react";
import axios from "axios";

import { AuthorizedProfile } from "./AuthorizedProfile";
import { UnauthorizedProfile } from "./UnauthorizedProfile";

type UserProfile = {
  id: number;
  firstName: string;
  username?: string;
  balance: number;
  level: string;
  daysWithUs: number;
  givenProofOfPuffsCount: number;
  takenProofOfPuffsCount: number;
};

export const ProfileScreen: React.FC = () => {
  const [userProfile, setUserProfile] = React.useState<UserProfile | null>(null)

  const handleConnect = React.useCallback(async () => {
    const { initData } = window.Telegram.WebApp;

    const params = new URLSearchParams(String(initData));
    const userJsonString = params.get("user");

    if (!userJsonString) {
      console.error("Telegram: initData params for `user` not found");
      return;
    }

    try {
      const user = JSON.parse(userJsonString);
      const response = await axios.get(`https://seven-ducks-show.loca.lt/v2/users/${user.id}`, {
        headers: {
          "telegram-init-data": initData,
          // localtunnel bypass for local development
          "bypass-tunnel-reminder": "true"
        }
      });
      setUserProfile(response.data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleStake = React.useCallback(() => {
    // TODO: Implement staking
    console.log("Stake clicked");
  }, []);

  const handleMint = React.useCallback(() => {
    // TODO: Implement minting
    console.log("Mint clicked");
  }, []);

  if (userProfile === null) {
    return <UnauthorizedProfile onConnect={handleConnect} />;
  }

  return (
    <AuthorizedProfile
      balance={userProfile.balance}
      role={userProfile.level}
      stats={{
        daysWithUs: userProfile.daysWithUs,
        givenProofOfPuffsCount: userProfile.givenProofOfPuffsCount,
        takenProofOfPuffsCount: userProfile.takenProofOfPuffsCount
      }}
      username={userProfile.username || userProfile.firstName}
      onMint={handleMint}
      onStake={handleStake}
    />
  );
};

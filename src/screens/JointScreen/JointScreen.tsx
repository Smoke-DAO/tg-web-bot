import * as React from "react";
import { useState } from "react";
import styled from "@emotion/styled";

import { Button } from "@components/Button.tsx";
import { Column } from "@components/Column.tsx";
import { Input } from "@components/Input.tsx";
import { Headline } from "@components/Text.tsx";
import { MintedScreen } from "@screens/JointScreen/MintedScreen.tsx";
import { jointsApi } from "../../services/api";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const JointScreen: React.FC = () => {
  const [openedMintScreen, setOpenedMintScreen] = useState(false);
  const [jointQuantity, setJointQuantity] = useState("1");
  const [isLoading, setIsLoading] = useState(false);
  
  const mokenCost = parseInt(jointQuantity) * 100;
  
  const handleMint = async () => {
    try {
      setIsLoading(true);
      const quantity = parseInt(jointQuantity);
      await jointsApi.mintJoints(quantity);
      setOpenedMintScreen(true);
    } catch (error) {
      console.error("Error minting joints:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  if (openedMintScreen) {
    return <MintedScreen value={jointQuantity} />;
  }
  return (
    <Root>
      <Headline>Mint $JOINT</Headline>
      <Column gap="16px">
        <Input
          fullWidth={true}
          handleInput={() => {}}
          name="$MOKEN"
          topDescription="You burn"
          value={mokenCost.toString()}
        />
        <Input
          bottomDescription="1 $JOINT = 100 $MOKEN"
          fullWidth={true}
          handleInput={(value) => setJointQuantity(value)}
          name="$JOINT"
          topDescription="You get"
          value={jointQuantity}
        />
        <Button disabled={isLoading} fullwidth={true} onClick={handleMint}>
          {isLoading ? "Minting..." : "Mint"}
        </Button>
      </Column>
    </Root>
  );
};

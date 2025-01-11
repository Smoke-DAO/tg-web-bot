import * as React from "react";
import styled from "@emotion/styled";

import { Button } from "@components/Button.tsx";
import { Column } from "@components/Column.tsx";
import { Input } from "@components/Input.tsx";
import { Headline } from "@components/Text.tsx";
import { useState } from "react";
import { MintedScreen } from "@screens/JointScreen/MintedScreen.tsx";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const JointScreen: React.FC = () => {
  const [openedMintScreen, setOpenedMintScreen] = useState(false);
  if (openedMintScreen) {
    return <MintedScreen value="100" />;
  }
  return (
    <Root>
      <Headline>Mint $JOINT</Headline>
      <Column gap="16px">
        <Input
          fullWidth={true}
          handleInput={(str) => {}}
          name="$MOKEN"
          topDescription="You burn"
          value="100"
        />
        <Input
          bottomDescription="1 $JOINT = 1000 $MOKEN"
          fullWidth={true}
          handleInput={(str) => {}}
          name="$JOINT"
          topDescription="You get"
          value="100"
        />
        <Button fullwidth={true} onClick={() => setOpenedMintScreen(true)}>
          Mint
        </Button>
      </Column>
    </Root>
  );
};

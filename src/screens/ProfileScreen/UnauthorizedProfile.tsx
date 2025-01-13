import * as React from "react";
import { Headline } from "../../components/Text";
import { Root, Description, ConnectButton } from "./styles";
import { Button } from "@components/Button.tsx";

interface UnauthorizedProfileProps {
  onConnect: () => void;
}

export const UnauthorizedProfile: React.FC<UnauthorizedProfileProps> = ({ onConnect }) => {
  return (
    <Root>
      <Headline>Profile</Headline>
      <Description>
        Smoke DAO is a community of crypto enthusiasts from all over the world. We educate people on
        crypto, exchange information and ideas, grow GameFi and RWA protocols, farm coins and having
        fun.
      </Description>
      <Button fullwidth={true} onClick={onConnect}>
        Connect Wallet
      </Button>
    </Root>
  );
};

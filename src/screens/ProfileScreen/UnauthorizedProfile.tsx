import * as React from "react";
import { Headline } from "../../components/Text";
import { Root, Description, ConnectButton } from "./styles";

interface UnauthorizedProfileProps {
  onConnect: () => void;
}

export const UnauthorizedProfile: React.FC<UnauthorizedProfileProps> = ({ onConnect }) => {
  return (
    <Root>
      <Headline>Profile</Headline>
      <Description>
        Smoke DAO is a community of crypto enthusiasts from all over the world. 
        We educate people on crypto, exchange information and ideas, grow GameFi 
        and RWA protocols, farm coins and having fun.
      </Description>
      <ConnectButton onClick={onConnect}>
        Connect Wallet
      </ConnectButton>
    </Root>
  );
}; 
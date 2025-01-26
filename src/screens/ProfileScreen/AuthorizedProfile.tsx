import * as React from "react";

import { Button } from "@components/Button.tsx";
import { Column } from "@components/Column.tsx";
import { Row } from "@components/Row.tsx";
import { SecondaryButton } from "@components/SecondaryButton.tsx";

import { Body, Headline, Title } from "../../components/Text";

import {
  ActionButtons,
  Header,
  ReferralsSection,
  Root,
  StatCard,
  StatsGrid,
  StatTitle,
  StatValue,
  UserInfo,
  Username,
  UserRole
} from "./styles";

interface AuthorizedProfileProps {
  username: string;
  role: string;
  stats: {
    daysWithUs: number;
    givenProofOfPuffsCount: number;
    takenProofOfPuffsCount: number;
  };
  balance: number;
  onStake: () => void;
  onMint: () => void;
}

export const AuthorizedProfile: React.FC<AuthorizedProfileProps> = ({
  username,
  role,
  stats,
  balance,
  onStake,
  onMint
}) => {
  return (
    <Root>
      <Header>
        <UserInfo>
          <Headline>Profile</Headline>
          <UserRole>{role}</UserRole>
        </UserInfo>
        <Username>
          <Title>{username}</Title>
        </Username>
      </Header>

      <StatsGrid>
        <StatCard>
          <StatTitle>Days with us</StatTitle>
          <StatValue>{stats.daysWithUs}</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>Validated</StatTitle>
          <StatValue>{stats.givenProofOfPuffsCount}</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>Got validations</StatTitle>
          <StatValue>{stats.takenProofOfPuffsCount}</StatValue>
        </StatCard>
      </StatsGrid>

      <Row style={{ gap: "8px", alignItems: "center" }}>
        <ReferralsSection>
          <StatTitle>$MOKEN Balance</StatTitle>
          <StatValue>{balance}</StatValue>
        </ReferralsSection>

        <ActionButtons>
          <SecondaryButton disabled={true} fullwidth={true} size="small" onClick={onStake}>
            Stake
          </SecondaryButton>
          <SecondaryButton fullwidth={true} size="small" variant="primary" onClick={onMint}>
            Mint
          </SecondaryButton>
        </ActionButtons>
      </Row>

      <Column gap="8px">
        <Title>About Smoke DAO</Title>
        <Body>
          Farm $moken in games and for inviting new members to the community through Proof of Puff.
          Mint $joint for $moken and exchange them for real joints in our partner shops around the
          world.{" "}
        </Body>
      </Column>
      <Button fullwidth={true} size="large">
        Shops on the Map
      </Button>
    </Root>
  );
};

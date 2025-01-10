import * as React from "react";
import { Body, Headline, Title } from "../../components/Text";
import {
  Root,
  UserInfo,
  Username,
  UserRole,
  StatsGrid,
  StatCard,
  StatTitle,
  StatValue,
  ActionButtons,
  ReferralsSection,
  Header
} from "./styles";
import { Row } from "@components/Row.tsx";
import { SecondaryButton } from "@components/SecondaryButton.tsx";
import { Column } from "@components/Column.tsx";

interface AuthorizedProfileProps {
  username: string;
  role: string;
  stats: {
    totalSmoken: number;
    totalSjoint: number;
    totalStaked: number;
  };
  referrals: number;
  onStake: () => void;
  onMint: () => void;
}

export const AuthorizedProfile: React.FC<AuthorizedProfileProps> = ({
  username,
  role,
  stats,
  referrals,
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
          <StatTitle>Total $moken</StatTitle>
          <StatValue>{stats.totalSmoken}</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>Total $joint</StatTitle>
          <StatValue>{stats.totalSjoint}</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>Total $joint</StatTitle>
          <StatValue>{stats.totalStaked}</StatValue>
        </StatCard>
      </StatsGrid>

      <Row style={{ gap: "8px", alignItems: "center" }}>
        <ReferralsSection>
          <StatTitle>Refferals</StatTitle>
          <StatValue>{referrals}</StatValue>
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

      <Column style={{ gap: "8px" }}>
        <Title>About Smoke DAO</Title>
        <Body>
          Farm $moken in games and for inviting new members to the community through Proof of Puff.
          Mint $joint for $moken and exchange them for real joints in our partner shops around the
          world.{" "}
        </Body>
      </Column>
    </Root>
  );
};

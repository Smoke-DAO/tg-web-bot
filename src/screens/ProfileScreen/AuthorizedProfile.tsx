import * as React from "react";
import { Headline, Title } from "../../components/Text";
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
  ActionButton,
  ReferralsSection,
  ReferralsTitle,
  ReferralsValue,
  Header
} from "./styles";

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

      <ReferralsSection>
        <ReferralsTitle>Refferals</ReferralsTitle>
        <ReferralsValue>{referrals}</ReferralsValue>
      </ReferralsSection>

      <ActionButtons>
        <ActionButton onClick={onStake}>Stake</ActionButton>
        <ActionButton variant="primary" onClick={onMint}>Mint</ActionButton>
      </ActionButtons>
    </Root>
  );
}; 
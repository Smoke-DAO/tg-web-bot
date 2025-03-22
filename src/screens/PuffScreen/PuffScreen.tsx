import * as React from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";

import { Button } from "@components/Button.tsx";
import { Column } from "@components/Column.tsx";
import { Row } from "@components/Row.tsx";
import { SecondaryButton } from "@components/SecondaryButton.tsx";
import { Body, Headline } from "@components/Text.tsx";
import { StatTitle, StatValue } from "@screens/ProfileScreen/styles.ts";
import { SmokeSession } from "@screens/PuffScreen/SmokeSession.tsx";
import { useStores } from "@stores/useStores";

import { puffsApi } from "../../services/api";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ProfileCard = styled.div`
  width: 50%;
  background: linear-gradient(240deg, rgba(54, 161, 15, 0.2) 0%, rgba(54, 161, 15, 0.12) 100%);
  border-radius: 12px;
  padding: 12px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PuffScreen: React.FC = observer(() => {
  const { userStore } = useStores();
  const [openSmokeSession, setOpenSmokeSession] = useState(false);
  const [sessionData, setSessionData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const profile = userStore.profile;
  const smokeId = profile?.id.toString() || "Not available";
  const tokenBalance = profile?.balance || 0;

  const handleStartSession = async () => {
    setIsLoading(true);
    try {
      const response = await puffsApi.createPuff();
      setSessionData(response);
      setOpenSmokeSession(true);
    } catch (error) {
      console.error("Failed to start smoke session:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Root>
      {!openSmokeSession && (
        <Column gap="24px">
          <Headline>Smoke DAO bot</Headline>
          <Row gap="8px">
            <ProfileCard>
              <StatTitle>Smoke ID</StatTitle>
              <StatValue>{smokeId}</StatValue>
            </ProfileCard>
            <ProfileCard>
              <StatTitle>Total $moken</StatTitle>
              <StatValue>{tokenBalance}</StatValue>
            </ProfileCard>
          </Row>
          <Button disabled={isLoading} fullwidth={true} onClick={handleStartSession}>
            {isLoading ? "Loading..." : "Start Smoke Session"}
          </Button>
          <Body>
            Start a smokey session every time you smoke with friends. Scan the received QR code and
            get $moken.
          </Body>
          <SecondaryButton fullwidth={true} onClick={() => {}}>
            High Society chat
          </SecondaryButton>
        </Column>
      )}
      {openSmokeSession && sessionData && (
        <SmokeSession sessionData={sessionData} smokeId={smokeId} />
      )}
    </Root>
  );
});

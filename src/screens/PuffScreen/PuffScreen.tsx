import * as React from "react";
import styled from "@emotion/styled";

import { Button } from "@components/Button.tsx";
import { Column } from "@components/Column.tsx";
import { Row } from "@components/Row.tsx";
import { SecondaryButton } from "@components/SecondaryButton.tsx";
import { Body, Headline } from "@components/Text.tsx";
import { StatTitle, StatValue } from "@screens/ProfileScreen/styles.ts";
import { useState } from "react";
import { SmokeSession } from "@screens/PuffScreen/SmokeSession.tsx";

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

export const PuffScreen: React.FC = () => {
  const [openSmokeSession, setOpenSmokeSession] = useState(false);
  const smokeId = "9851880";

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
              <StatValue>14 880</StatValue>
            </ProfileCard>
          </Row>
          <Button fullwidth={true} onClick={() => setOpenSmokeSession(true)}>
            Start Smoke Session
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
      {openSmokeSession && <SmokeSession smokeId={smokeId} />}
    </Root>
  );
};

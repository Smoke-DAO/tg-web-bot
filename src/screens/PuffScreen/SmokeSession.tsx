import * as React from "react";
import { FC, useState } from "react";
import QRCode from "react-qr-code";
import styled from "@emotion/styled";

import { Button } from "@components/Button.tsx";
import { Column } from "@components/Column.tsx";
import { Body, Headline } from "@components/Text.tsx";
import { ValidatedScreen } from "@screens/PuffScreen/ValidatedScreen.tsx";

type TProps = {
  smokeId: string;
};

const WrapperQR = styled(Column)`
  border-radius: 8px;
  padding: 20px;
  background-color: white;
  width: fit-content;
`;

export const SmokeSession: FC<TProps> = ({ smokeId }) => {
  const [openValidatedScreen, setOpenValidatedScreen] = useState(false);
  return (
    <>
      {!openValidatedScreen && (
        <Column gap="24px">
          <Headline>Smoke DAO bot</Headline>
          <Column gap="16px">
            <WrapperQR alignItems="center" size={350}>
              <QRCode value={smokeId} />
            </WrapperQR>
            <Body>
              Here is your unique &#34;Proof of Puff&#34; link:
              https://t.me/smoke_dao_bot?start=pop-1c727b7c Send this link to the person you are
              validating. They need to click on it to receive their &#34;Proof of Puff&#34;.
            </Body>
            <Body>The &#34;Proof of Puff&#34; link is valid for 1 hours.</Body>
            <Button fullwidth={true} onClick={() => setOpenValidatedScreen(true)}>
              Share Proof of Puff link
            </Button>
          </Column>
        </Column>
      )}
      {openValidatedScreen && <ValidatedScreen />}
    </>
  );
};

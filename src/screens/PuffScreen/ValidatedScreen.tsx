import * as React from "react";

import { Button } from "@components/Button.tsx";
import { Column } from "@components/Column.tsx";
import { Body, Headline, Title } from "@components/Text.tsx";
import { SecondaryButton } from "@components/SecondaryButton.tsx";
import { Row } from "@components/Row.tsx";
import { useNavigate } from "react-router-dom";

export const ValidatedScreen = () => {
  const navigate = useNavigate();
  return (
    <Column gap="24px">
      <Headline>Validated!</Headline>
      <Column gap="16px">
        <Column gap="8px">
          <Title>Congratulations!</Title>
          <Body>
            Smoke session counted, new participants validated successfully. You have been credited
            with 100 Smokens each
          </Body>
        </Column>
        <Column gap="8px">
          <Button fullwidth={true}>High Sosciety chat</Button>
          <SecondaryButton fullwidth={true} onClick={() => navigate("/profile")}>
            My Smoke Profile
          </SecondaryButton>
        </Column>
      </Column>
      <Column gap="16px">
        <Title>How to get more $moken</Title>
        <Row alignItems="center">
          <Body>Subscribe Smoke DAO Twitter </Body>
          <SecondaryButton size="small">Subscribe</SecondaryButton>
        </Row>
        <Row alignItems="center">
          <Body>Subscribe Smoke DAO Instagram</Body>
          <SecondaryButton size="small">Subscribe</SecondaryButton>
        </Row>
      </Column>
    </Column>
  );
};

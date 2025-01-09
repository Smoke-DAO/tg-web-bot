import * as React from "react";
import styled from "@emotion/styled";
import { Headline } from "../../components/Text";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const GamesScreen: React.FC = () => {
  return (
    <Root>
      <Headline>Games</Headline>
      {/* TODO: Add games content */}
    </Root>
  );
}; 
import * as React from "react";
import { FC } from "react";
import styled from "@emotion/styled";

import { Column } from "@components/Column.tsx";
import { Title } from "@components/Text.tsx";
import { Button } from "@components/Button.tsx";
import { useNavigate } from "react-router-dom";

type TProps = {
  value: string;
};

const Wrapper = styled(Column)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Image = styled.div`
  width: 196px;
  height: 211px;
  background-image: url("public/images/thumb.png");
  background-size: contain;
`;

export const MintedScreen: FC<TProps> = ({ value }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Column alignItems="center" gap="32px" width="248px">
        <Title>{`You minted ${value} $JOINT! `}</Title>
        <Image />
        <Button fullwidth={true} onClick={() => navigate("/profile")}>
          Profile
        </Button>
      </Column>
    </Wrapper>
  );
};

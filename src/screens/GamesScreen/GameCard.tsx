import * as React from "react";
import { FC } from "react";
import styled from "@emotion/styled";

import { Button } from "@components/Button.tsx";
import { Column } from "@components/Column.tsx";
import { Body, Title } from "@components/Text.tsx";

const Wrapper = styled(Column)`
  padding: 12px;
  gap: 16px;
  border-radius: 8px;
  background: linear-gradient(240deg, rgba(54, 161, 15, 0.2) 0%, rgba(54, 161, 15, 0.12) 100%);
`;

const ImageContainer = styled.div`
  background-image: url(${(props: { img: string }) => props.img});
  width: 100%;
  height: 100px;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size: cover;
`;

type TProps = {
  imageSrc: string;
  name: string;
  description: string;
  gameLink: string;
};
export const GameCard: FC<TProps> = ({ imageSrc, name, description, gameLink }) => {
  const handleClick = () => window.open(gameLink, "_blank");
  return (
    <Wrapper>
      <ImageContainer img={imageSrc} />
      <Column gap="4px">
        <Title>{name}</Title>
        <Body>{description}</Body>
      </Column>
      <Button fullwidth={true} onClick={handleClick}>
        Play
      </Button>
    </Wrapper>
  );
};

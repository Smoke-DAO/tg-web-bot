import * as React from "react";
import { FC } from "react";
import styled from "@emotion/styled";

import { Column } from "@components/Column.tsx";
import { Body } from "@components/Text.tsx";

type TProps = {
  name: string;
  topDescription?: string;
  bottomDescription?: string;
  handleInput: (str: string) => void;
  value: string;
  fullWidth?: boolean;
};

const Wrapper = styled(Column)`
  align-items: flex-start;
  width: ${(props: { fullWidth?: boolean }) => props.fullWidth ?? "100%"};
  color: rgba(147, 144, 148, 1);
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  border-radius: 8px;
  width: 100%;
  border: 1px solid rgba(147, 144, 148, 1);
  padding: 16px;
  color: rgba(147, 144, 148, 1);
`;

const _Input = styled.input`
  font-size: 14px;
  background-color: inherit;
  width: 50%;
  outline: 0;
  border: none;
  color: rgba(147, 144, 148, 1);
`;

export const Input: FC<TProps> = ({
  name,
  topDescription,
  bottomDescription,
  handleInput,
  value,
  fullWidth
}) => {
  const handler = (e) => {
    handleInput(e.target.value);
  };

  return (
    <Wrapper fullWidth={fullWidth} gap="4px">
      {topDescription && <Body>{topDescription}</Body>}
      <InputContainer>
        <_Input value={value} onInput={handler} />
        <Body>{name}</Body>
      </InputContainer>
      {bottomDescription && <Body>{bottomDescription}</Body>}
    </Wrapper>
  );
};

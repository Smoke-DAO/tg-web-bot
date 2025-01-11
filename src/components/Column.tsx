import styled from "@emotion/styled";

type TProps = {
  gap?: string;
};

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${(props: TProps) => props.gap};
`;

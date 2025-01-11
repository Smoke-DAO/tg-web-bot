import styled from "@emotion/styled";

type TProps = {
  gap?: string;
  width?: string;
  alignItems?: string;
};

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${(props: TProps) => props.gap};
  width: ${(props: TProps) => props.width};
  align-items: ${(props: TProps) => props.alignItems};
`;

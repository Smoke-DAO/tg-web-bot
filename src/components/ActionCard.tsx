import styled from "@emotion/styled";
import { Button } from "./Button";

const Card = styled.div<{ backgroundImage?: string }>`
  height: 185px;
  width: 185px;
  border-radius: 8px;
  box-shadow: 0px 4px 45px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  margin: auto 0;
  padding: 141px 43px 12px;
  border: 1px solid rgba(39, 77, 18, 1);
  background-image: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : "none"};
  background-size: cover;
  background-position: center;
`;

interface ActionCardProps {
  title: string;
  onClick?: () => void;
  backgroundImage?: string;
  href?: string;
}

export const ActionCard: React.FC<ActionCardProps> = ({ title, onClick, backgroundImage }) => {
  return (
    <Card backgroundImage={backgroundImage}>
      <Button size="small" onClick={onClick}>
        {title}
      </Button>
    </Card>
  );
};

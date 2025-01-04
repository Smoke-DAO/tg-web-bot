import styled from "@emotion/styled";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  size?: "large" | "small";
  outline?: boolean;
}

const StyledButton = styled.button<{ size?: string; outline?: boolean }>`
  display: inline-flex;
  height: ${(props) => (props.size === "large" ? "56px" : "32px")};
  max-height: ${(props) => (props.size === "large" ? "56px" : "32px")};
  padding: ${(props) => (props.size === "large" ? "0 8p" : "0 4px")};
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  ${(props) =>
    props.outline
      ? `
    background: transparent;
    border: 1px solid ${props.disabled ? "#605D62" : "#36A10F"};
    
    &:active {
      border-color: #285218;
    }
  `
      : `
    background: ${props.disabled ? "#313033" : "linear-gradient(102deg, black 0%, #36A10F 100%)"};
    border: 1px solid ${props.disabled ? "#605D62" : "#36A10F"};
  `}

  box-shadow: ${(props) => (props.disabled ? "none" : "0px 8px 24px rgba(35, 113, 7, 0.08)")};

  &:disabled {
    color: #605d62;
  }
`;

const ButtonText = styled.div<{ disabled?: boolean; size?: string; outline?: boolean }>`
  text-align: center;
  color: ${(props) => {
    if (props.disabled) return "#605D62";
    if (props.outline) return "#36A10F";
    return "white";
  }};
  font-size: ${(props) => (props.size === "large" ? "24px" : "16px")};
  font-family: Novalion;
  font-weight: 800;
  line-height: 25px;
  word-wrap: break-word;
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick,
  size = "large",
  outline = false
}) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} size={size} outline={outline}>
      <ButtonText disabled={disabled} size={size} outline={outline}>
        {children}
      </ButtonText>
    </StyledButton>
  );
};

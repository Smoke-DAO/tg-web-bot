import * as React from "react";
import styled from "@emotion/styled";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  size?: "large" | "small";
  outline?: boolean;
  fullwidth?: boolean;
}

const ButtonWrapper = styled.div<{ disabled?: boolean; fullwidth?: boolean }>`
  background-size: 200% 200%;
  border-radius: 9px;
  animation: gradient 8s ease infinite;
  width: ${(props) => (props.fullwidth ? "100%" : "fit-content")};
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const StyledButton = styled.button<{ size?: string; outline?: boolean }>`
  width: 100%;
  display: inline-flex;
  height: ${(props) => (props.size === "large" ? "56px" : "32px")};
  max-height: ${(props) => (props.size === "large" ? "56px" : "32px")};
  padding: ${(props) => (props.size === "large" ? "0 8px" : "0 14px")};
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: none;

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
    background: unset};
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
  font-weight: 500;
  line-height: 25px;
  white-space: nowrap;
  transform: scaleX(0.75);
`;

export const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick,
  size = "large",
  outline = true,
  fullwidth = false
}) => {
  return (
    <ButtonWrapper disabled={disabled} fullwidth={fullwidth}>
      <StyledButton disabled={disabled} outline={outline} size={size} onClick={onClick}>
        <ButtonText disabled={disabled} outline={outline} size={size}>
          {children}
        </ButtonText>
      </StyledButton>
    </ButtonWrapper>
  );
};

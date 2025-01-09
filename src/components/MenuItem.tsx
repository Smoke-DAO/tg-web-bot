import styled from '@emotion/styled';

const MenuItemWrapper = styled.div<{ isActive?: boolean }>`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.isActive ? 'rgba(54, 161, 15, 1)' : 'rgba(147, 144, 148, 1)'};
  white-space: nowrap;
  justify-content: start;
  margin: auto 0;
  width: 72px;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 100%;
    height: 100%;
    color: inherit;
  }
`;

const Label = styled.div`
  margin-top: 4px;
  font: 400 12px/1 Inter, sans-serif;
`;

interface MenuItemProps {
    icon: React.ReactNode;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ icon, label, isActive, onClick }) => {
    return (
        <MenuItemWrapper isActive={isActive} onClick={onClick}>
            <IconWrapper>{icon}</IconWrapper>
            <Label>{label}</Label>
        </MenuItemWrapper>
    );
};
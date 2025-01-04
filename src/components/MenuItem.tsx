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
`;

const Icon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
`;

const Label = styled.div`
  margin-top: 4px;
  font: 400 12px/1 Inter, sans-serif;
`;

interface MenuItemProps {
    icon: string;
    label: string;
    isActive?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({ icon, label, isActive }) => {
    return (
        <MenuItemWrapper isActive={isActive}>
            <Icon loading="lazy" src={icon} alt={label} />
            <Label>{label}</Label>
        </MenuItemWrapper>
    );
};
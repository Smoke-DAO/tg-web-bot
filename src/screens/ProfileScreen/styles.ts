import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-right: 0;
`;

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Description = styled.p`
  color: #FFF;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  opacity: 0.8;
`;

export const ConnectButton = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(140deg, #000 0%, #36A10F 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    opacity: 0.9;
  }
`;

export const StatsGrid = styled.div`
  width: 100%;
  margin-top: 24px;
  display: grid;
  grid-template-columns: 0.3fr 0.3fr 0.3fr;
  gap: 16px;
`;

export const StatCard = styled.div`
  background: linear-gradient(240deg, rgba(54, 161, 15, 0.2) 0%, rgba(54, 161, 15, 0.12) 100%);
  border-radius: 12px;
  padding: 12px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
  height: 72px;
  gap: 8px;
//   flex: 1;
//   text-align: left;
`;

export const StatTitle = styled.div`
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 500;
  transform: scaleX(0.5);
  width: 50%;
  white-space: nowrap;
  text-align: left;
  width: fit-content;
`;

export const StatValue = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 400;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Username = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
//   > h2 {
//     text-align: right;
//     transform-origin: right center;
//   }
`;

export const UserRole = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 400;
`;

export const ActionButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 24px;
`;

export const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 16px;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  
  ${props => props.variant === 'primary' ? `
    background: #36A10F;
    color: white;
  ` : `
    background: rgba(0, 0, 0, 0.3);
    color: white;
  `}

  &:hover {
    opacity: 0.9;
  }
`;

export const ReferralsSection = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ReferralsTitle = styled.div`
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 500;
`;

export const ReferralsValue = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 16px;
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 600;
`; 
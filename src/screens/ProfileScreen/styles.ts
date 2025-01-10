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
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  opacity: 0.8;
`;

export const ConnectButton = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(140deg, #000 0%, #36a10f 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-family: "Inter", sans-serif;
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
  display: flex;
  gap: 16px;
  justify-content: space-between;
`;

export const StatCard = styled.div`
  width: 30%;
  background: linear-gradient(240deg, rgba(54, 161, 15, 0.2) 0%, rgba(54, 161, 15, 0.12) 100%);
  border-radius: 12px;
  padding: 12px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StatTitle = styled.div`
  color: white;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  font-weight: 300;
  white-space: nowrap;
  text-align: left;
  line-height: 1;
  letter-spacing: 0.5px;
`;

export const StatValue = styled.div`
  font-family: "Inter", sans-serif;
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
  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-weight: 400;
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: calc((100% - 8px) / 2);
`;

export const ReferralsSection = styled.div`
  background: linear-gradient(240deg, rgba(54, 161, 15, 0.2) 0%, rgba(54, 161, 15, 0.12) 100%);
  border-radius: 12px;
  padding: 12px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc((100% - 8px) / 2);
`;

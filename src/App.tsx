import * as React from "react";
import { MenuItem } from "./components/MenuItem";
import { SvgIcon } from "./components/SvgIcon";
import styled from "@emotion/styled";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  {
    icon: <SvgIcon src="icons/profile.svg" />,
    label: "Profile",
    href: "/profile"
  },
  {
    icon: <SvgIcon src="icons/games.svg" />,
    label: "Games",
    href: "/games"
  },
  {
    icon: <SvgIcon src="icons/home.svg" />,
    label: "Main",
    href: "/"
  },
  {
    icon: <SvgIcon src="icons/grace.svg" />,
    label: "$JOINT",
    href: "/joint"
  },
  {
    icon: <SvgIcon src="icons/puff.svg" />,
    label: "Proof of puff",
    href: "/puff"
  }
];

const Root = styled.main`
  background-image: url("https://cdn.builder.io/api/v1/image/assets/TEMP/8fda8d1cd42ff17279492e39f6a6fa27dc98d6cffc8ff835ebbd07f2edba9f2f?placeholderIfAbsent=true&apiKey=0ad627149f724a528bdb7c55f297c206");
  background-position: center;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  margin: 0 auto;
  padding: 16px;
  box-sizing: border-box;
  position: relative;
  align-items: center;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, #000000 0%, #36a10f 800%);
    opacity: 0.9;
    pointer-events: none;
  }
`;

const Content = styled.div`
  width: 100%;
  flex: 1;
  max-width: 480px;
  overflow-y: auto;
  margin-bottom: 128px;
  position: relative;
  z-index: 1;
`;

const Navigation = styled.nav`
  position: fixed;
  box-sizing: border-box;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 24px;
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
  padding: 24px;
  width: calc(100% - 32px);
  z-index: 1;
`;

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Root>
      <Content>
        <Outlet />
      </Content>
      <Navigation>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            {...item}
            isActive={location.pathname === item.href}
            onClick={() => navigate(item.href)}
          />
        ))}
      </Navigation>
    </Root>
  );
};

export default App;

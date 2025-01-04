import * as React from "react";
import { MenuItem } from "./components/MenuItem";
import styled from "@emotion/styled";
import { WelcomeScreen } from "./screens/WelcomeScreen";

const menuItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d25a9630bc1d9ba828884620f9535bdb53cf8f3a29239218a24a56bd3ca71f81?placeholderIfAbsent=true&apiKey=0ad627149f724a528bdb7c55f297c206",
    label: "Profile",
    isActive: true
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c437d87bb14770ae1054b1b9be192f446c0417ac054049c5ab5cba08b4e23f9e?placeholderIfAbsent=true&apiKey=0ad627149f724a528bdb7c55f297c206",
    label: "Games"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4838988ae21f3634e79b817e40ea692ce5419be3752e1e7312ada8bb84bd7e59?placeholderIfAbsent=true&apiKey=0ad627149f724a528bdb7c55f297c206",
    label: "$JOINT"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d1297f3f8b69427644e3fbc5acef438796bb5e11f9dd99d29965162e506dbc2?placeholderIfAbsent=true&apiKey=0ad627149f724a528bdb7c55f297c206",
    label: "Proof of puff"
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
  border: 1px solid red;
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
  gap: 40px 49px;
  overflow: hidden;
  justify-content: space-between;
  padding: 24px;
  max-width: 480px;
  width: calc(100% - 32px);
  z-index: 1;
`;

const App: React.FC = () => {
  return (
    <Root>
      <Content>
        <WelcomeScreen />
      </Content>
      <Navigation>
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </Navigation>
    </Root>
  );
};

export default App;

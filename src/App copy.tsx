import React, { useState } from "react";
import WebApp from "@twa-dev/sdk";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import reactLogo from "./assets/react.svg";

import viteLogo from "/vite.svg";
import styled from "@emotion/styled";

const Root = styled.div``


function App() {
  
  return (
    <WelcomeScreen />
  );
}

const OldRoot = () => {
  const [count, setCount] = useState(0);

  return <>
   <div>
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img alt="Vite logo" className="logo" src={viteLogo} />
        </a>
        <a href="https://react.dev" rel="noreferrer" target="_blank">
          <img alt="React logo" className="logo react" src={reactLogo} />
        </a>
      </div>
      {/* Example of fetching user name for WebApp */}
      <h1>Hello, {WebApp.initDataUnsafe.user?.username}!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
  </>
}

export default App;

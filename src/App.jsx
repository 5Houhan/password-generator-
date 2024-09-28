import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PswdGen from "./componet/pswdGen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <PswdGen />
      </div>
    </>
  );
}

export default App;

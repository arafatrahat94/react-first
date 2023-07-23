import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Shopping from "./components/Shopping/Shopping";

function App() {
  return (
    <div>
      <Header></Header>
      <Shopping></Shopping>
    </div>
  );
}

export default App;

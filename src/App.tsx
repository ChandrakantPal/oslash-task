import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ShareButton } from "./stories/ShareButton";

function App() {
  return (
    <ShareButton
      onClick={() => {
        console.log("clicked");
      }}
    />
  );
}

export default App;

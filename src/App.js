import React from "react";
import Sidebar from "./components/Sidebar";
import ContentWrapper from "./components/ContentWrapper";

import "./assets/css/app.css";


function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <ContentWrapper />
      </div>
  );
}

export default App;


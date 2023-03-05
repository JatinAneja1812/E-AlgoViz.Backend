import React, { useState, useEffect } from "react";
import Topbar from "./Components/Topbar/Topbar";
import { Layout } from "antd";

const { ipcRenderer } = window.require("electron");

function App() {
  return (
    <Layout
      style={{
        border: "2px solid gray",
        height: "calc(100vh)",
        width: "calc(100vw)",
      }}
    >
      <Topbar />
    </Layout>
  );
}

export default App;

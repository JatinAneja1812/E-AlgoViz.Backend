import React, { useState, useEffect } from "react";
import "../../App.css";
import { Layout, Typography } from "antd";
import TopbarWrapper from "./Topbar.styles";
import exitImg from "../../imgs/X.svg";
import underscoreImg from "../../imgs/underscore.svg";
import unmaximiseImg from "../../imgs/unmaximise.svg";

const { Text } = Typography;
const { Header } = Layout;
const { ipcRenderer } = window.require("electron");

export default function Topbar() {
  const [maximisedWindow, setMaximisedWindow] = useState(false);

  const handleCloseOnClick = () => {
     
  };

  const handleMiniOnClick = () => {
    ipcRenderer.send("minimise-window");
  };

  const handleMaxiOnClick = () => {
    ipcRenderer.send("maximise-window");
  };

  // const handleClick = () => {
  //   console.log("Clicked");
  //   ipcRenderer.send("greeting");
  // };

  useEffect(() => {
    ipcRenderer.removeAllListeners("maximised-window");

    ipcRenderer.on("maximised-window", (_) => {
      setMaximisedWindow(!maximisedWindow);
    });
  }, [maximisedWindow]);

  return (
    <TopbarWrapper>
      <Header className="App-Header">
        <Text className="App-title">ALGORITHMS VISUALIZER</Text>

        <img
          src={exitImg}
          className="App-exit"
          alt="close"
          onClick={handleCloseOnClick}
        />
        <img
          src={underscoreImg}
          className="App-minimise"
          alt="mini"
          onClick={handleMiniOnClick}
        />
        {maximisedWindow === false && (
          <img
            src={unmaximiseImg}
            className="App-maximise"
            alt="maxi"
            onClick={handleMaxiOnClick}
          />
        )}
        {maximisedWindow === true && (
          <img
            src={unmaximiseImg}
            className="App-maximise"
            alt="maxi"
            onClick={handleMaxiOnClick}
          />
        )}

      </Header>
    </TopbarWrapper>
  );
}

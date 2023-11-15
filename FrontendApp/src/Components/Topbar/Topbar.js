import React, { useState, useEffect } from "react";
import "../../App.css";
import { Layout, Typography, Tooltip } from "antd";
import TopbarWrapper from "./Topbar.styles";
import exitImg from "../../imgs/X.svg";
import underscoreImg from "../../imgs/underscore.svg";
import unmaximiseImg from "../../imgs/unmaximise.svg";
import reloadImg from "../../imgs/reload.svg";

const { Text } = Typography;
const { Header } = Layout;
const { ipcRenderer } = window.require("electron");

export default function Topbar() {
  const [maximisedWindow, setMaximisedWindow] = useState(false);

  const handleCloseOnClick = () => {
    ipcRenderer.send("close-window");
  };

  const handleMiniOnClick = () => {
    ipcRenderer.send("minimise-window");
  };

  const handleMaxiOnClick = () => {
    ipcRenderer.send("maximise-window");
  };

  const handleReloadOnClick = () => {
    ipcRenderer.send("reload-window");
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

        <Tooltip title={"Close"}>
          <img
            src={exitImg}
            className="App-exit"
            alt="close"
            onClick={handleCloseOnClick}
          />
        </Tooltip>
        <Tooltip title={"Minimise"}>
          <img
            src={underscoreImg}
            className="App-minimise"
            alt="mini"
            onClick={handleMiniOnClick}
          />
        </Tooltip>
        <Tooltip title={"Reload"}>
          <img
            src={reloadImg}
            className="App-reload"
            alt="reload"
            onClick={handleReloadOnClick}
          />
        </Tooltip>
        {maximisedWindow === false && (
          <Tooltip title={"Maximise"}>
            <img
              src={unmaximiseImg}
              className="App-maximise"
              alt="maxi"
              onClick={handleMaxiOnClick}
            />
          </Tooltip>
        )}
        {maximisedWindow === true && (
          <Tooltip title={"Maximise"}>
            <img
              src={unmaximiseImg}
              className="App-maximise"
              alt="maxi"
              onClick={handleMaxiOnClick}
            />
          </Tooltip>
        )}

      </Header>
    </TopbarWrapper>
  );
}

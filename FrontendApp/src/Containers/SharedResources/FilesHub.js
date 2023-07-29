import React from "react";
import FilesHubWrapper from "./FilesHub.styles";
import FileManager from "../../Components/Tabs/FileManager";
import FilesHubNavBar from "../../Components/Menu/FileshubNavMenu";

export default function FilesHub() {
  return (
    <FilesHubWrapper>
      <FilesHubNavBar />
      <FileManager />
    </FilesHubWrapper>
  );
}

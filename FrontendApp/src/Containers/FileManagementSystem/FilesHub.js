import React from "react";
import FileManager from "../../Components/Tabs/FileSystemTabs/FileManager";
import FilesHubNavBar from "../../Components/Menu/FileshubNavMenu";

export default function FilesHub() {
  return (
    <div>
      <FilesHubNavBar />
      <FileManager />
    </div>
  );
}

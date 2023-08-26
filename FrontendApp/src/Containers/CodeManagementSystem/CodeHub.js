import React, { useEffect, useState } from "react";
import CodehubNavMenu from "../../Components/Menu/CodehubNavMenu";
import { CodeManagerPageWrapper } from "./CodeHub.styles";

import AlgorithmTypeTabs from "../../Components/Tabs/CodeManagementSystemTabs/AlgorithmsTabs";

const { ipcRenderer } = window.require("electron");

//API call to Database
function GetAllAlgorithmsList() {
  return new Promise((resolve, reject) => {
    ipcRenderer.send("GetAlgorithmsList");
    ipcRenderer.on("resultList", (event, result) => {
      const parsedResult = JSON.parse(result);
      resolve(parsedResult); // Resolve the promise with the result
    });
  });
}

export default function CodeHub() {
  const [algorithmsList, setAlgorithmsList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await GetAllAlgorithmsList();
        setAlgorithmsList(result);
      } catch (error) {
        // Handle any errors that occur during the API call
        console.error(error);
      }
    }

    // Call the async function to fetch data
    fetchData();
  }, []);

  return (
    <CodeManagerPageWrapper>
      <CodehubNavMenu />
      <div className="codePage_base_container">
        <AlgorithmTypeTabs algorithmsList={algorithmsList} />
      </div>
    </CodeManagerPageWrapper>
  );
}

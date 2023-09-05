import React, { useEffect, useState } from "react";
import { AlgorithmTabWrapper } from "../AlgorithmsTabs.styles";
import { GetAllAlgorithmsData } from "../../../../Utility/LibraryFunctions/GetAllAlgorithmsData";
import Nodata from "../../../../imgs/NoData.svg";
import { Tabs } from "antd";
import TabContent from "./Component/TabsContent";

export default function SortingAlgorithmsTab(props) {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("1");
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await GetAllAlgorithmsData(props.SortingAlgorithms);
        setData(result);
      } catch (error) {
        // Handle any errors that occur during the API call
        console.error(error);
      }
    }
    // Call the async function to fetch data
    fetchData();
  }, [props.SortingAlgorithms]);

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const handleAlgorithmClick = (algorithm) => {
    setSelectedAlgorithm(algorithm);
  };

  return (
    <AlgorithmTabWrapper>
      <div className="button-container">
        <ul className="bubble">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        {data.map((algorithm) => (
          <button
            className="Tab_button"
            key={algorithm.key}
            onClick={() => handleAlgorithmClick(algorithm)}
          >
            {algorithm.title}
          </button>
        ))}
      </div>

      <div className="info-container">
        {selectedAlgorithm ? (
          <>
            <h2>{selectedAlgorithm.title}</h2>
            <h4>{selectedAlgorithm.description}</h4>
            <Tabs defaultActiveKey="1" onChange={handleTabChange}>
              <Tabs.TabPane
                tab={<span>Algorithm Explanation</span>}
                style={{ outline: "none" }}
                key="1"
              >
                <TabContent active={activeTab === "1"}>
                  {selectedAlgorithm.codeExplanation}
                </TabContent>
              </Tabs.TabPane>
              <Tabs.TabPane
                tab={<span>Pseudo Code</span>}
                style={{ outline: "none" }}
                key="2"
              >
                <TabContent active={activeTab === "2"}>
                  {selectedAlgorithm.pseudoCode}
                </TabContent>
              </Tabs.TabPane>
              <Tabs.TabPane
                tab={<span>Python</span>}
                style={{ outline: "none" }}
                key="3"
              >
                <TabContent active={activeTab === "3"}>
                  {selectedAlgorithm.pythonCode}
                </TabContent>
              </Tabs.TabPane>
              <Tabs.TabPane
                tab={<span>JavaScript</span>}
                style={{ outline: "none" }}
                key="4"
              >
                <TabContent active={activeTab === "4"}>
                  {selectedAlgorithm.jsCode}
                </TabContent>
              </Tabs.TabPane>
              <Tabs.TabPane
                tab={<span>Java</span>}
                style={{ outline: "none" }}
                key="5"
              >
                <TabContent active={activeTab === "5"}>
                  {selectedAlgorithm.javaCode}
                </TabContent>
              </Tabs.TabPane>
              <Tabs.TabPane
                tab={<span>C#</span>}
                style={{ outline: "none" }}
                key="6"
              >
                <TabContent active={activeTab === "6"}>
                  {selectedAlgorithm.cSharpCode}
                </TabContent>
              </Tabs.TabPane>
            </Tabs>
          </>
        ) : (
          <div className="no-data">
            <img src={Nodata} alt="No Data" />
            <p>No data available</p>
            <p
              style={{
                top: "-24px",
                left: "14px",
              }}
            >
              Select an Algorithm to View{" "}
            </p>
          </div>
        )}
      </div>
    </AlgorithmTabWrapper>
  );
}

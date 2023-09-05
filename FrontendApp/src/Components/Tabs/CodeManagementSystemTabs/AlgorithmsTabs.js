import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import { AlgorithmTypeTabsWrapper } from "./AlgorithmsTabs.styles";
import PathfindigAlgorithmsTab from "./Tabs/PathfindigAlgorithmsTab";
import AlgorithmsTypeEnum from "../../../Enums/AlgorithmsTypeEnum";
import SortingAlgorithmsTab from "./Tabs/SortingAlgorithmsTab";
import BSTAlgorithmsTabs from "./Tabs/BSTAlgorithmsTabs";
import SieveAlgorithmTab from "./Tabs/SieveAlgorithmTab";

// Create a separate component for the tab content
const TabContent = ({ active, children }) => {
    const classes = `tab-content ${active ? 'active' : ''}`;
    return <div className={classes}>{children}</div>;
  };

export default function AlgorithmTypeTabs(props) {
  const [activeTab, setActiveTab] = useState('1');
  const [filteredAlgorithms, setFilteredAlgorithms] = useState([]);

  useEffect(() => {
    // Filter algorithms based on the active tab
    if (activeTab === '1') {
      // Filter pathfinding algorithms
      const pathfindingAlgorithms = props.algorithmsList == null ? [] : props.algorithmsList.filter(algorithm => algorithm.algorithmsType === AlgorithmsTypeEnum.PATHFINDING_ALGORITHMS);
      setFilteredAlgorithms(pathfindingAlgorithms);
    } else if (activeTab === '2') {
      // Filter sorting algorithms
      const sortingAlgorithms = props.algorithmsList == null ? [] : props.algorithmsList.filter(algorithm => algorithm.algorithmsType === AlgorithmsTypeEnum.SORTING_ALGORITHMS);
      setFilteredAlgorithms(sortingAlgorithms);
    } else if (activeTab === '3') {
      // Filter binary search tree algorithms
      const bstAlgorithms = props.algorithmsList == null ? [] : props.algorithmsList.filter(algorithm => algorithm.algorithmsType === AlgorithmsTypeEnum.BINARY_SEARCH_TREE_ALGORITHMS);
      setFilteredAlgorithms(bstAlgorithms);
    } else if (activeTab === '4') {
      // Filter prime number search algorithms

      const primeAlgorithms = props.algorithmsList == null ? [] : props.algorithmsList.filter(algorithm => algorithm.algorithmsType === AlgorithmsTypeEnum.PRIME_NUMBER_SEARCH_ALGORITHMS);
      setFilteredAlgorithms(primeAlgorithms);
    }
  }, [activeTab, props.algorithmsList]);

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <AlgorithmTypeTabsWrapper>
      <Tabs defaultActiveKey="1" onChange={handleTabChange}>
        <Tabs.TabPane
          tab={<span>Pathfinding Algorithms</span>}
          style={{ outline: 'none' }}
          key="1"
        >
          <TabContent active={activeTab === '1'}><PathfindigAlgorithmsTab PathfindingAlgorithms = {filteredAlgorithms}/></TabContent>
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={<span>Sorting Algorithms</span>}
          style={{ outline: 'none' }}
          key="2"
        >
          <TabContent active={activeTab === '2'}><SortingAlgorithmsTab SortingAlgorithms = {filteredAlgorithms} /></TabContent>
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={<span>Binary Search Tree Algorithms</span>}
          style={{ outline: 'none' }}
          key="3"
        >
          <TabContent active={activeTab === '3'}><BSTAlgorithmsTabs BSTAlgorithms = {filteredAlgorithms}/></TabContent>
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={<span>Prime Numbers Search Algorithms</span>}
          style={{ outline: 'none' }}
          key="4"
        >
          <TabContent active={activeTab === '4'}><SieveAlgorithmTab sieveAlgorithm = {filteredAlgorithms} /></TabContent>
        </Tabs.TabPane>
      </Tabs>
    </AlgorithmTypeTabsWrapper>
  );
}

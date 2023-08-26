import React, { useState, useEffect } from "react";
import { Tabs, Button, message, Spin } from "antd";
import { AlgorithmTypeTabsWrapper } from "./AlgorithmsTabs.styles";
import PathfindigAlgorithmsTab from "./Tabs/PathfindigAlgorithmsTab";

// Create a separate component for the tab content
const TabContent = ({ active, children }) => {
    const classes = `tab-content ${active ? 'active' : ''}`;

    return <div className={classes}>{children}</div>;
  };

export default function AlgorithmTypeTabs() {
  const [activeTab, setActiveTab] = useState('1');

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
          <TabContent active={activeTab === '1'}><PathfindigAlgorithmsTab /></TabContent>
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={<span>Sorting Algorithms</span>}
          style={{ outline: 'none' }}
          key="2"
        >
          <TabContent active={activeTab === '2'}>Tab 2 content</TabContent>
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={<span>Binary Search Tree Algorithms</span>}
          style={{ outline: 'none' }}
          key="3"
        >
          <TabContent active={activeTab === '3'}>Tab 3 content</TabContent>
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={<span>Prime Numbers Search Algorithms</span>}
          style={{ outline: 'none' }}
          key="4"
        >
          <TabContent active={activeTab === '4'}>Tab 4 content</TabContent>
        </Tabs.TabPane>
      </Tabs>
    </AlgorithmTypeTabsWrapper>
  );
}

import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import HomePage from "./Containers/HomePage/Homepage";
import PathAlgoVisualizer from "./Containers/Visualizers/PathfindingVisualizer/PathVisualizer";
import SortAlgoVisualizer from "./Containers/Visualizers/SortingVisualizers/SortAlgoVisualizer";
import PrimeNumberVisualizer from "./Containers/Visualizers/PrimeNumbersVisualizer/PrimeNumberVisualizer";
import FilesHub from "./Containers/FileManagementSystem/FilesHub";
import BSTVisualizer from "./Containers/Visualizers/BinarySearchTreeVisualizer/BSTVisualizer";
import ChatAppLandingPage from "./E-AlgoVisChatApp/ChatAppHome/ChatAppLandingPage";
import ChatRoom from "./E-AlgoVisChatApp/ChatAppComponents/ChatRoom/ChatRoom";
import CodeHub from "./Containers/CodeManagementSystem/CodeHub";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/pathfindingvisualizer" element={<PathAlgoVisualizer />} />
      <Route path="/sortingVisualizer" element={<SortAlgoVisualizer />} />
      <Route
        path="/primeNumberVisualizer"
        element={<PrimeNumberVisualizer />}
      />
      <Route path="/bstVisualizer" element={<BSTVisualizer />} />
      <Route path="/filesUploadandDownload" element={<FilesHub />} />
      <Route path="/codeManager" element={<CodeHub />} />
      <Route path="/chatRoomApp" element={<ChatAppLandingPage />} />
      <Route path="/chatRoom/:id" element={<ChatRoom />} />
    </Routes>
  );
};

export default AppRoutes;

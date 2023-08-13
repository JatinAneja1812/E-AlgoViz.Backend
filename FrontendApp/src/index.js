import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./Components/Topbar/Topbar";
import './index.css';
import App from './App';
import HomePage from "./Containers/HomePage/Homepage.js"; 
import PathAlgoVisualizer from './Containers/Visualizers/PathfindingVisualizer/PathVisualizer';
import SortAlgoVisualizer from './Containers/Visualizers/SortingVisualizers/SortAlgoVisualizer';
import PrimeNumberVisualizer from './Containers/Visualizers/PrimeNumbersVisualizer/PrimeNumberVisualizer';
import FilesHub from './Containers/FileManagementSystem/FilesHub';
import reportWebVitals from './reportWebVitals';
import BSTVisualizer from './Containers/Visualizers/BinarySearchTreeVisualizer/BSTVisualizer';
import ChatAppLandingPage from './E-AlgoVisChatApp/ChatAppHome/ChatAppLandingPage';
import ChatRoom from './E-AlgoVisChatApp/ChatAppComponents/ChatRoom/ChatRoom';

ReactDOM.render(
  <React.StrictMode>
    <Topbar />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/homepage" element={<HomePage/>} />
        <Route path="/pathfindingvisualizer" element={<PathAlgoVisualizer/>} />
        <Route path="/sortingVisualizer" element={<SortAlgoVisualizer/>} />
        <Route path="/primeNumberVisualizer" element={<PrimeNumberVisualizer/>} />
        <Route path="/bstVisualizer" element={<BSTVisualizer/>} />
        <Route path="/filesUploadandDownload" element={<FilesHub/>} />
        <Route path="/chatRoomApp" element={<ChatAppLandingPage/>} />
        <Route path="/chatRoom/:id" element={<ChatRoom/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./Components/Topbar/Topbar";
import './index.css';
import App from './App';
import HomePage from "./Containers/HomePage/Homepage.js"; 
import PathAlgoVisualizer from './Containers/Visualizers/PathfindingVisualizer/PathVisualizer.js';
import SortAlgoVisualizer from './Containers/Visualizers/SortingVisualizers/SortAlgoVisualizer';
import FilesHub from './Containers/SharedResources/FilesHub';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Topbar />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/homepage" element={<HomePage/>} />
        <Route path="/pathfindingvisualizer" element={<PathAlgoVisualizer/>} />
        <Route path="/sortingVisualizer" element={<SortAlgoVisualizer/>} />
        <Route path="/filesUploadandDownload" element={<FilesHub/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

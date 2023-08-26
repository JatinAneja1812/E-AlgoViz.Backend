import styled from "styled-components";

const AlgorithmTypeTabsWrapper = styled.div`
  margin: 10px;

  /* Style the tab bar */
  .ant-tabs-bar {
    background-color: #333; /* Background color */
    color: #fff; /* Text color */
    border-bottom: none; /* Remove the border */
    padding: 12px 0; /* Adjust padding as needed */
  }

  .ant-tabs-nav {
    font-weight: 600;
    color: #ccc;
  }

  .ant-tabs-nav-wrap {
    background: rgb(7, 101, 133);
    border-radius: 10px;
  }

  .ant-tabs-tab {
    left: 12px;
    font-size: 15px;
    letter-spacing: 2px;
    transition: 0.1s;
  }

  .ant-tabs-tab:hover {
    color: #fff;
    text-shadow: 0 0 5px #27b3e3, 0 0 25px #27b3e3, 0 0 50px #27b3e3,
      0 0 100px #27b3e3;
  }

  .ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #fff !important;
  }

  .ant-tabs-tab.ant-tabs-tab-active {
    font-size: 18px;
    color: #fff !important;
    border-radius: 4px; /* Rounded corners for active tab */
  }

  /* Style the tab content */
  .tab-content {
    opacity: 0;
    transform: translate(-20px, -20px); /* Start from top-left corner */
    transform-origin: top left;
    transition: opacity 0.8s ease, transform 0.8s ease;
    padding: 16px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    animation-name: slide-in;
    animation-duration: 0.8s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: 0.2s; /* Delay the animation for a smoother effect */
  }

  /* Style the active tab content */
  .tab-content.active {
    opacity: 1;
    transform: translate(0, 0); /* Move to its original position */
  }

  /* Define a keyframe animation for sliding in */
  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translate(-20px, -20px);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;

const PathfindingAlgorithmTabWrapper = styled.div`
  display: flex;
  justify-content: space-between; /* Space evenly between the two divs */

  .button-container {
    background-color: #f0f0f0;
    padding: 10px;
    height: 70vh;
    border: 1px solid #ddd;
    overflow-y: auto; /* Enable vertical scrollbar */
  }

  .button-container::-webkit-scrollbar {
    width: 8px; /* Set the width of the scrollbar */
  }

  .button-container::-webkit-scrollbar-thumb {
    background-color: #888; /* Scrollbar thumb color */
    border-radius: 4px;
  }

  .button-container::-webkit-scrollbar-track {
    background-color: #f0f0f0; /* Scrollbar track color */
  }

  .Tab_button1 {
    display: block;
    background-color: #ccc;
    padding: 10px;
    margin: 5px;
    width: 30vh;
    cursor: pointer;
    border: none;
  }

  .info-container {
    flex: 1; /* Take 50% of the available space */
    background-color: #f9f9f9;
    padding: 10px;
    height: 70vh;
    border: 1px solid #ddd;
    overflow-y: auto; /* Enable vertical scrollbar */
  }

  .info-container::-webkit-scrollbar {
    width: 8px; /* Set the width of the scrollbar */
  }

  .info-container::-webkit-scrollbar-thumb {
    background-color: #888; /* Scrollbar thumb color */
    border-radius: 4px;
  }

  .info-container::-webkit-scrollbar-track {
    background-color: #f9f9f9; /* Scrollbar track color */
  }

  .info {
    display: none;
    padding: 10px;
  }

`;

export { AlgorithmTypeTabsWrapper, PathfindingAlgorithmTabWrapper };

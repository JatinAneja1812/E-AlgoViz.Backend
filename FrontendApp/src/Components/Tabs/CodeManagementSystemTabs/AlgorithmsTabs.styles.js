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
    text-transform: uppercase;
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

const AlgorithmTabWrapper = styled.div`
  display: flex;
  justify-content: space-between; /* Space evenly between the two divs */

  .Innertab-content {
    opacity: 0;
    transform: translate(-20px, -20px); /* Start from top-left corner */
    transform-origin: top left;
    transition: opacity 0.8s ease, transform 0.8s ease;
    padding: 16px;
    background-color: rgba(192, 225, 250, 0.3);
    border: 1px solid #ddd;
    font-weight: 600;
    border-radius: 10px;
    border-left: 3px solid #555;
    color: #333;
    border-radius: 4px;
    page-break-inside: avoid;
    font-family: 'Courier New', monospace;
    font-size: 15px;
    line-height: 1.6;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
    animation-name: slide-in;
    animation-duration: 0.8s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    overflow-y: auto; /* Enable vertical scrollbar */
    animation-delay: 0.2s; /* Delay the animation for a smoother effect */
  }

  /* Style the active tab content */
  .Innertab-content.active {
    opacity: 1;
    height: 48vh;
    position: relative;
    top: -3vh;
    transform: translate(0, 0); /* Move to its original position */
  }

  /* Scrollbar styles */
  .Innertab-content::-webkit-scrollbar {
    width: 8px; /* Set the width of the scrollbar */
  }
  
  .Innertab-content::-webkit-scrollbar-thumb {
    background-color: #888; /* Scrollbar thumb color */
    border-radius: 4px;
  }
  
  .Innertab-content::-webkit-scrollbar-track {
    background-color: rgba(192, 225, 250, 0.3);
  }

  .button-container {
    background-color: rgb(7, 101, 133);
    padding: 10px;
    height: 70vh;
    display: inline-grid
    border: 2px solid #ddd;
    overflow-y: auto; /* Enable vertical scrollbar */
    position: relative; /* Relative positioning for pseudo-elements */
  }

  .bubble{
    position: fixed;
    top: 1px;
    left: 17px;
    width: 17%;
    height: 100%;
    border-radius: 100px;
    overflow: hidden;
  }
  
  .bubble li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 20s linear infinite;
    bottom: -150px;
    
  }
  
  .bubble li:nth-child(1){
    left: 20%;
    width: 80px;
    height: 80px;
    animation-delay: 1s;
  }
  
  .bubble li:nth-child(2){
    left: 85%;
    width: 100px;
    height: 100px;
    animation-delay: 2s;
    animation-duration: 12s;
  }
  
  .bubble li:nth-child(3){
    left: 17%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }
  
  .bubble li:nth-child(4){
    left: 4%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }
  
  .bubble li:nth-child(5){
    left: 8%;
    width: 20px;
    height: 20px;
    animation-delay: 3s;
  }
  
  .bubble li:nth-child(6){
    left: 27%;
    width: 80px;
    height: 80px;
    animation-delay: 8s;
  }
  
  .bubble li:nth-child(7){
    left: 70%;
    width: 50px;
    height: 50px;
    animation-delay: 4s;
  }
  
  .bubble li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 7s;
  }
  
  
  /* Hide the buttons initially */
  .Tab_button {
    box-sizing: border-box;
    display: block;
    background-color: rgba(169, 201, 212, 0.4);
    padding: 10px;
    margin: 5px;
    height: 6vh;
    margin-bottom: 10px;
    font-size: 16px;
    border-radius: 10px;
    width: 30vh;
    color: #fff;
    cursor: pointer;
    opacity: 0;
    transform: translateX(-100%);
    border: 0 solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
    outline: 1px solid;
    outline-color: rgba(255, 255, 255, .5);
    outline-offset: 0px;
    text-shadow: none;
  }
  
  .Tab_button:hover {
    border: 2px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 20px;
    text-shadow: 1px 1px 2px #427388; 
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  /* Define animation for each button */
  .Tab_button:nth-child(1) {
    animation: slideInAnimate 0.5s forwards 0.5s;
  }
  
  .Tab_button:nth-child(2) {
    animation: slideInAnimate 0.5s forwards 1s;
  }
  
  .Tab_button:nth-child(3) {
    animation: slideInAnimate 0.5s forwards 1.5s;
  }
  .Tab_button:nth-child(4) {
    animation: slideInAnimate 0.5s forwards 2s;
  }
  .Tab_button:nth-child(5) {
    animation: slideInAnimate 0.5s forwards 2.5s;
  }
  .Tab_button:nth-child(6) {
    animation: slideInAnimate 0.5s forwards 3s;
  }
  .Tab_button:nth-child(7) {
    animation: slideInAnimate 0.5s forwards 3.5s;
  }
  .Tab_button:nth-child(8) {
    animation: slideInAnimate 0.5s forwards 4s;
  }
  .Tab_button:nth-child(9) {
    animation: slideInAnimate 0.5s forwards 4.5s;
  }
  .Tab_button:nth-child(10) {
    animation: slideInAnimate 0.5s forwards 5s;
  }
  .Tab_button:nth-child(11) {
    animation: slideInAnimate 0.5s forwards 5.5s;
  }
  .Tab_button:nth-child(12) {
    animation: slideInAnimate 0.5s forwards 6s;
  }
  .Tab_button:nth-child(13) {
    animation: slideInAnimate 0.5s forwards 6.5s;
  }
  .Tab_button:nth-child(14) {
    animation: slideInAnimate 0.5s forwards 7s;
  }
  .Tab_button:nth-child(15) {
    animation: slideInAnimate 0.5s forwards 7.5s;
  }
  .Tab_button:nth-child(16) {
    animation: slideInAnimate 0.5s forwards 8s;
  }
  .Tab_button:nth-child(17) {
    animation: slideInAnimate 0.5s forwards 8.5s;
  }
  .Tab_button:nth-child(18) {
    animation: slideInAnimate 0.5s forwards 9s;
  }
  .Tab_button:nth-child(19) {
    animation: slideInAnimate 0.5s forwards 9.5s;
  }

  /* Add more rules for additional buttons */
  
  @keyframes slideInAnimate {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  /* Scrollbar styles */
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

  .info-container {
    flex: 1; /* Take 50% of the available space */
    background-color: #f9f9f9;
    padding: 10px;
    height: 70vh;
    border: 1px solid #ddd;
    overflow: hidden; /* Enable vertical scrollbar */
  }


.no-data{
    display: grid;
    position: relative;
    transform: translate(0px, 22vh);
    justify-content: center;
}

.no-data p {
  position: relative;
  left: 4vh;
  color: #8c9396;
}


`;

export { AlgorithmTypeTabsWrapper, AlgorithmTabWrapper };

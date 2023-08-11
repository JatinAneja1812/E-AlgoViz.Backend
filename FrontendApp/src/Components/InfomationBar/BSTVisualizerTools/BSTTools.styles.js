import styled from "styled-components";

const BSTToolbarWrapper = styled.div`
  {
    display: flex;
    margin-top: 10vh;
    justify-content: space-evenly;
    height: 86px;
    width: 100%;
    top: -35px;
    position: relative;
    background-color: white;
    overflow: hidden;
  }

  .rotate-icon {
    transition: transform 3s linear, box-shadow 0.5s ease-in-out;
  }
  
  .rotate-icon:hover {
    animation: rotate 10s linear infinite, glow 1.5s ease-in-out infinite alternate;
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.7);
    border-radius: 50px;
  }
  
  .paused {
    animation-play-state: paused;
  }
  
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes glow {
    0% {
      box-shadow: 0 0 20px rgba(255, 0, 0, 0.7);
    }
    100% {
      box-shadow: 0 0 30px rgba(255, 0, 0, 0.9);
    }
  }
`;
export default BSTToolbarWrapper;
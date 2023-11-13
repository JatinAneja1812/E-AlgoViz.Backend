import styled from "styled-components";

const ChatAppLandingPageWrapper = styled.div`

@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");

  .ChatRoomCards-Container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 89vh;
  }

  .ChatRoomCards-Scroll {
    overflow-x: hidden;
    overflow-y: auto;
    height: 43vh;
    width: 130vh;
    top: -69px;
    position: relative;
    max-height: calc(2 * 20vh + 2 * 20px);
    display: flex;
    flex-direction: column; /* Stacks the children vertically */
    margin-bottom: 20px; /* Add spacing below the scroll area */
  }

  .ChatRoomCards-Scroll::-webkit-scrollbar {
    width: 12px;
  }

  .ChatRoomCards-Scroll::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* Styles for the scrollbar thumb */
  .ChatRoomCards-Scroll::-webkit-scrollbar-thumb {
    background-color: #1976d2;
    border-radius: 10px;
  }

  .ChatRoomCards-List {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 26px;
    padding: 0;
    margin: 0;
  }

  .ChatRoomCard {
    background: linear-gradient(rgba(7, 101, 133, 0.1), rgba(255, 255, 255, 0.9));
    border-radius: 10px;
    height: 19vh;
    width: 30vh;
    border: 2px solid #000;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    overflow: hidden;
  }

  .ChatRoomCard:hover {
    transform: scale(0.85); /* Increase the scale to make it bigger */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

  .ChatRoomLink {
    display: block;
    text-decoration: none;
    color: #333333;
    position: relative;
    top: 8px;
    padding: 30px;
  }

  .AddRoomCard {
    height: 18vh;
    width: 18vh;
    background: radial-gradient(
      rgb(7, 101, 133, 0.55) 60%,
      rgba(255, 255, 255, 1) 82%
    );
    border-radius: 50%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 25px 3px rgb(7, 101, 133, 0.55);
  }

  /* pulse wave */
  .AddRoomCard:before {
    content: "";
    position: absolute;
    width: 150%;
    height: 150%;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    -webkit-animation: pulsate1 5s;
    animation: pulsate1 3s;
    -webkit-animation-direction: forwards;
    animation-direction: forwards;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: steps;
    animation-timing-function: steps;
    opacity: 1;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.25);
    top: -26%;
    left: -28%;
    background: rgba(198, 16, 0, 0);
  }

  @-webkit-keyframes pulsate1 {
    0% {
      -webkit-transform: scale(0.6);
      transform: scale(0.6);
      opacity: 1;
      box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75),
        0px 0px 25px 10px rgba(255, 255, 255, 0.75);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
      box-shadow: none;
    }
  }

  @keyframes pulsate1 {
    0% {
      -webkit-transform: scale(0.6);
      transform: scale(0.6);
      opacity: 1;
      box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75),
        0px 0px 25px 10px rgba(255, 255, 255, 0.75);
    }
    100% {
      -webkit-transform: scale(1, 1);
      transform: scale(1);
      opacity: 0;
      box-shadow: none;
    }
  }

  .AddRoomIcon {
    font-size: 120px;
    margin-top: -50px;
    margin-left: -5px;
    color: rgb(
      255,
      255,
      255,
      0.65
    ); /* Optional background color for the card */
  }

  .AddRoomText {
    font-size: 16px;
    font-weight: 700;
    margin-top: -20px;
    color: rgb(255, 255, 255, 0.5); /* Optional background color for the card */
  }

  .ChatRoomLink h2 {
    color: #fff;
    font-size: 2.5em;
    position: absolute;

  }
  
  .ChatRoomLink h2:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 2px  rgb(7, 101, 133);
  }
  
  .ChatRoomLink h2:nth-child(2) {
    color: rgb(25, 53, 128);
    animation: animate 4s ease-in-out infinite;
  }
  
  @keyframes animate {
    0%,
    100% {
      clip-path: polygon(
        0% 45%,
        16% 44%,
        33% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }
  
    50% {
      clip-path: polygon(
        0% 60%,
        15% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }


  #ChatRoomsload {
    position: relative;
    height: 42px;
    left: 278%;
    top: 25%;
    margin-left: -100vh;
    overflow: visible;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
  }

  #ChatRoomsload div {
    position: absolute;
    width: 20px;
    height: 36px;
    opacity: 0;
    font-size: 50px;
    font-weight: 600;
    font-family: Helvetica, Arial, sans-serif;
    animation: move 2s linear infinite;
    -o-animation: move 2s linear infinite;
    -moz-animation: move 2s linear infinite;
    -webkit-animation: move 2s linear infinite;
    transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    color: #000;
  }

  #ChatRoomsload div:nth-child(2) {
    animation-delay: 0.2s;
    -o-animation-delay: 0.2s;
    -moz-animation-delay: 0.2s;
    -webkit-animation-delay: 0.2s;
  }

  #ChatRoomsload div:nth-child(3) {
    animation-delay: 0.4s;
    -o-animation-delay: 0.4s;
    -webkit-animation-delay: 0.4s;
    -webkit-animation-delay: 0.4s;
  }

  #ChatRoomsload div:nth-child(4) {
    animation-delay: 0.6s;
    -o-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
    -webkit-animation-delay: 0.6s;
  }

  #ChatRoomsload div:nth-child(5) {
    animation-delay: 0.8s;
    -o-animation-delay: 0.8s;
    -moz-animation-delay: 0.8s;
    -webkit-animation-delay: 0.8s;
  }

  #ChatRoomsload div:nth-child(6) {
    animation-delay: 1s;
    -o-animation-delay: 1s;
    -moz-animation-delay: 1s;
    -webkit-animation-delay: 1s;
  }

  #ChatRoomsload div:nth-child(7) {
    animation-delay: 1.2s;
    -o-animation-delay: 1.2s;
    -moz-animation-delay: 1.2s;
    -webkit-animation-delay: 1.2s;
  }

  @keyframes move {
    0% {
      left: 0;
      opacity: 0;
    }

    35% {
      left: 41%;
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }

    65% {
      left: 59%;
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }

    100% {
      left: 100%;
      -moz-transform: rotate(-180deg);
      -webkit-transform: rotate(-180deg);
      -o-transform: rotate(-180deg);
      transform: rotate(-180deg);
      opacity: 0;
    }
  }

  @-moz-keyframes move {
    0% {
      left: 0;
      opacity: 0;
    }

    35% {
      left: 41%;
      -moz-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }

    65% {
      left: 59%;
      -moz-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }

    100% {
      left: 100%;
      -moz-transform: rotate(-180deg);
      transform: rotate(-180deg);
      opacity: 0;
    }
  }

  @-webkit-keyframes move {
    0% {
      left: 0;
      opacity: 0;
    }

    35% {
      left: 41%;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }

    65% {
      left: 59%;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }

    100% {
      left: 100%;
      -webkit-transform: rotate(-180deg);
      transform: rotate(-180deg);
      opacity: 0;
    }
  }

  @-o-keyframes move {
    0% {
      left: 0;
      opacity: 0;
    }

    35% {
      left: 41%;
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }

    65% {
      left: 59%;
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }

    100% {
      left: 100%;
      -o-transform: rotate(-180deg);
      transform: rotate(-180deg);
      opacity: 0;
    }
  }
`;

export { ChatAppLandingPageWrapper };

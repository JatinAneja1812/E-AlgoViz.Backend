import styled from "styled-components";

const LiquidButtonWrapper = styled.div`

  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

  .liquidButton {
    position: relative;
    color: white;
    text-decoration: none !important;
    font-size: 1.4em;
    letter-spacing: 2px;
    font-family: "Roboto";
    border-radius: 5px;
    background: linear-gradient(90deg, #fd746c, #1d79d4);
    overflow: hidden;
    cursor: pointer;
    width: 150px;
    height: 4vh;
    margin-top: -50px;
    box-sizing: border-box;
  }

  .liquidButton__text {
    z-index: 1;
    display: block;
    position: relative;
  }

  .liquidButton__icon{
    padding-top: 7px;
    z-index: 1;
    display: block;
    position: relative;
  }

  .liquidButton__liquid {
    position: absolute;
    top: -80px;
    left: 0;
    width: 200px;
    height: 200px;
    background: #26a0da;
    box-shadow: inset 0px 0px 50px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }

  .liquidButton:hover .liquidButton__liquid {
    top: -120px;
  }

  .liquidButton__liquid:before,
  .liquidButton__liquid:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 200%;
    height: 200%;
    transform: translate(-50%, -75%);
  }

  .liquidButton__liquid:before {
    border-radius: 45%;
    background-color: rgba(20, 20, 20, 1);
    animation: animatebtn 5s linear infinite;
  }

  .liquidButton__liquid:after {
    border-radius: 40%;
    background-color: rgba(20, 20, 20, 0.5);
    animation: animatebtn 10s linear infinite;
  }

  .disabledLiquidButton__liquid {
    position: absolute;
    top: -80px;
    left: 0;
    width: 200px;
    height: 200px;
    background: #CCCCCC;
    box-shadow: inset 0px 0px 50px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }


  @keyframes animatebtn {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }


`;

export default LiquidButtonWrapper ;



import styled from "styled-components";

const ApplicationWrapper = styled.div`

@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

.ant-layout.ant-layout * {
    box-sizing: none;
}

.ant-layout {
    display: flex;
    flex: auto;
    flex-direction: column;
    min-height: 0;
    background: none; 
  }

.App {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Open Sans", sans-serif;
  }
  
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
  }
  
  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  .App-link {
    color: #61dafb;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
  
    to {
      transform: rotate(360deg);
    }
  }
  
  /* //Login Main Container */
  .login {
    width: 25em;
    height: 28em;
    /* //min-height: 44em; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6%;
    margin-right: 20px;
    position: relative;
    z-index: 99;
  
  }
   .container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(234, 241, 243);
    border: 4px solid rgb(17, 17, 17);
    box-shadow: 0px 0px 12px 2px rgba(15, 15, 15, 0.2);
    border-radius: 10px;
    position: relative;
    z-index: 99;
    width: 100%;
    height: 100%;
    z-index: 99;
    margin-bottom: 10px;
    padding: 17px 10px;
    /* //transition: transform 200ms ease-in-out; */
  }
  
  .login .rightside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90%;
    background-color: #113aab;
    width: 100%;
    position: absolute;
    right: -34%;
    border-radius: 6px;
    z-index: 1;
    transition: all 400ms ease-in-out;
    cursor: pointer;
    box-shadow: 0px 0px 12px 5px rgba(15, 15, 15, 0.281);
  }
  
  .right {
    right: -30%;
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90%;
    background-color:  rgb(255, 255, 255, 0.6);;
    width: 100%;
    position: absolute;
    right: -34%;
    border-radius: 6px;
    z-index: 1;
    transition: all 400ms ease-in-out;
    cursor: pointer;
    box-shadow: 0px 0px 12px 5px rgba(15, 15, 15, 0.281);
  }
  
  .login .right:hover {
    right: -38%;
  }
  
  .left {
    right: 30%;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90%;
    background-color: rgb(255, 255, 255, 0.6);;
    width: 100%;
    position: absolute;
    right: 34%;
    border-radius: 6px;
    z-index: 1;
    transition: all 400ms ease-in-out;
    cursor: pointer;
    box-shadow: 0px 0px 12px 5px rgba(15, 15, 15, 0.281);
  }
  
  .login .left:hover {
    right: 38%;
  }
  
  .text {
    font-size: 21px;
    font-weight: 700;
    color:#282c34;
    margin-right: 3em;
    margin-left: 1em;
  }
  .regtext {
    font-size: 21px;
    font-weight: 700;
    color:#282c34;
    margin-right: 1em;
    margin-left: 313px;
  }
  
  
  /* //Button */
  .btn {
    font-size: 21px;
    padding: 5px 20px;
    border: 0;
    width: 140px;
    background-color: #3498db;
    color: #fff;
    border-radius: 3px;
    transition: all 250ms ease-in-out;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #2386c8;
  }
  
  .btn:focus {
    outline: none;
  }
  
  
  @media screen and (min-width: 400px) {
    body {
      /* background-image: linear-gradient(to bottom right, rgb(0, 0, 0), black, rgb(1, 28, 86) , rgb(0, 60, 255) ,rgb(213, 225, 255)); */
      background: linear-gradient(180deg, #fd746c 10%,#000428 100%);
      background-attachment: fixed;
    }
  
    .login {
        width: 27em;
        height: 29em;
        margin-top: 9%;
        margin-right: 20px;
    }
    .login .container{
      padding-top: 10%;
      margin-top: 22.4%;
      height: 130%;
    }
    .left{
      margin-top: 53px;
  
    }
  
    .right{
      margin-top: 53px;
    }
  
    .btn {
      margin-bottom: 40px;
    }
    
  }
  
  @media screen and (min-width: 850px) {
    body {
      /* background-image: linear-gradient(to bottom right, rgb(0, 0, 0), black, rgb(1, 28, 86) , rgb(0, 60, 255) ,rgb(213, 225, 255)); */
      background: linear-gradient(180deg, #fd746c 10%,#000428 90%);
      background-attachment: fixed;
    }
    .login {
      width: 27em;
      height: 28em;
      margin-top: 10%;
      margin-right: -10px;
  }
  
  }
  
  @media screen and (min-width: 1920px) {
  
    .login {
      width: 27em;
      height: 30em;
      margin-top: 13%;
      margin-right: 30px;
  }
  }
  
    
`;

export default ApplicationWrapper;

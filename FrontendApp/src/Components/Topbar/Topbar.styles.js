import styled from "styled-components";

const TopbarWrapper = styled.div`
  
  background-color: #fd746c;
  height: 3vh;
  -webkit-user-select: none;
  -webkit-app-region: drag;

  .ant-menu-item {
    padding-left: 3vw;
    padding-right: 3vw;
    margin-right: 5vw;
    height: 8vh;
    line-height: 8vh;
    letter-spacing: 2px;
  }

  .ant-menu-item.ant-menu-item-selected.ant-menu-item-only-child {
    background-color: white;
    box-shadow: 0 4px 0 -2px #0e76bc;
    color: #1890ff;
  }

  .App-Header {
    position: fixed;
    width: 100%;
    height: 5vh !important;
    font-size: small;
    background: #fd746c !important;
    -webkit-user-select: none;
    -webkit-app-region: drag;
    box-shadow: 0px 0px 12px 5px rgba(15, 15, 15, 0.281);
  }

  .App-title {
    font-weight: 700;
    position: absolute;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: block;
    text-decoration: none;
    color: #fff;
    width: 28vw;
    font-size: 25px;
    line-height: 5vh;
  }

  ul li {
    -webkit-app-region: drag;
    text-transform: uppercase;
  }

  ul li:hover {
    cursor: pointer;
    box-shadow: 0 4px 0 -2px #1890ff;
    color: #1890ff;
  }

  li {
    display: inline-block;
  }

  .App-exit {
    height: 1.5vh;
    float: right;
    position: absolute;
    top: 1vh;
    right: 1vw;
    cursor: pointer;
    -webkit-app-region: no-drag;
  }

  .App-minimise {
    height: 1.5vh;
    float: right;
    position: absolute;
    top: 1vh;
    right: 7vw;
    cursor: pointer;
    -webkit-app-region: no-drag;
  }

  .App-maximise {
    height: 2vh;
    float: right;
    position: absolute;
    top: 0.75vh;
    right: 4vw;
    cursor: pointer;
    -webkit-app-region: no-drag;
  }
`;

export default TopbarWrapper;

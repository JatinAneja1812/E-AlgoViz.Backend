import styled from "styled-components";
const SortingVisToolbarWrapper = styled.div`
  {
    display: flex;
    height: 67px;
    width: 100%;
    top: 73px;
    position: relative;
    background-color: white;
    overflow: none;

    .changes {
      position: absolute;
      right: 0;
      top: 50%;
      -webkit-transform: translate(0, -50%);
              transform: translate(0, -50%);
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }

    .sliders {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      position: relative;
      top: -10px;
      justify-content: center;
      align-items: center;
      margin-right: 20vw;
    }
  }
`;
export default SortingVisToolbarWrapper;

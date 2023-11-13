/* BSTTreeOrder.styles.js */
import styled from "styled-components";

const BSTTreeOrderInfoBarWrapper = styled.div`
  display: flex;
  margin-top: -24px;
  justify-content: space-evenly;
  height: 90px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: white;
  overflow: hidden;

  .orderListStyle {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    overflow-y: auto; /* Enable vertical scrollbar if content overflows */
  }

  .order-elements {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .order-elements h3 {
    margin: 0;
    padding: 0;
  }

  .order-elements span {
    margin-top: 8px;
  }

  /* Custom scrollbar styles */
  .orderListStyle::-webkit-scrollbar {
    width: 6px;
  }

  .orderListStyle::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }

  .orderListStyle::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }
`;

export default BSTTreeOrderInfoBarWrapper;
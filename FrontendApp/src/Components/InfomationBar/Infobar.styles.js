import styled from "styled-components";
const InfobarWrapper = styled.div`
  {
    display: flex;
    height: 60px;
    width: 100%;
    top: 72px;
    position: relative;
    background-color: white;
    overflow: none;

    .unvisiteNode{
        display: flex;
        height: 24px;
        width : 24px;
        margin-top: 17px;
        margin-left: 23px;
        background-color: white;
        border: 2px solid lightblue;
    }

    .unvisiteNode_Text{
        color : black;
        margin-top: 20px;
        margin-left: 5px;
    }

    .visitedNode1{
        display: flex;
        height: 24px;
        width : 24px;
        margin-top: 17px;
        margin-left: 10px;
        background-color: #0aaecb;
        border: 2px solid lightblue;
    }

    .visitedNode2{
        display: flex;
        height: 24px;
        width : 24px;
        margin-top: 17px;
        margin-left: 10px;
        background-color: #09b9a2;
        border: 2px solid lightblue;
    }

    .visitedNode_Text{
        color : black;
        margin-top: 20px;
        margin-left: 5px;
    }

    .pathNode{
        display: flex;
        height: 24px;
        width : 24px;
        margin-top: 17px;
        margin-left: 10px;
        background-color: rgba(255, 230, 0, 0.75);
        border: 2px solid #ffed4a;
    }

    .pathNode_Text{
        color : black;
        margin-top: 20px;
        margin-left: 5px;
    }

    .wallNode{
        display: flex;
        height: 24px;
        width : 24px;
        margin-top: 17px;
        margin-left: 10px;
        background-color: #0c282c;
        border: 2px solid #303131;
    }

    .wallNode_Text{
        color : black;
        margin-top: 20px;
        margin-left: 5px;
    }

    //Node type 

    .startNode{
        display: flex;
        height: 26px;
        width : 26px;
        margin-top: 19px;
        margin-left: 70px;
    }

    .startNode_Text{
        color : black;
        margin-top: 20px;
        margin-left: 5px;
    }

    .endNode{
        display: flex;
        height: 26px;
        width : 26px;
        margin-top: 19px;
        margin-left: 20px;
    }

    .endNode_Text{
        color : black;
        margin-top: 20px;
        margin-left: 5px;
    }

    .bombNode{
        display: flex;
        height: 26px;
        width : 26px;
        margin-top: 19px;
        margin-left: 20px;
    }

    .bombNode_Text{
        color : black;
        margin-top: 20px;
        margin-left: 5px;
    }

    .weightNode{
        display: flex;
        height: 26px;
        width : 26px;
        margin-top: 19px;
        margin-left: 20px;
    }

    .weightNode_Text{
        color : black;
        margin-top: 20px;
        margin-left: 5px;
    }
    

  }
`;
export default InfobarWrapper;

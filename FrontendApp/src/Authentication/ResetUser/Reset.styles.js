import styled from "styled-components";

const ResetPasswordWrapper = styled.div`

    .reset {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: fixed;
        width: 108%;
        height: 118%;
        margin-top: -57px;
        background: rgba(0, 0, 0, 0.652);
        
        z-index: 1001;
    }
    .reset__container {
        display: flex;
        flex-direction: column;
        text-align: center;
        background-color: #dcdcdc;
        border: 2px solid #000;
        padding: 30px;
    }
    .reset__textBox {
        padding: 10px;
        font-size: 16px;
        margin-bottom: 10px;
    }
    #reset__btn {
        padding: 10px;
        font-size: 14px;
        margin-bottom: 10px;
        border: none;
        color: white;
        background-color: black !important;
    }
    .reset div {
        margin-top: 7px;
    }

    .cancel_btn{
        background: transparent;
        color: black;
        border: none;
        font-size: 14px;
        margin-left: 84%;
    }

    .cancel_btn:hover{
        color: red;
    }
`;

export default ResetPasswordWrapper;

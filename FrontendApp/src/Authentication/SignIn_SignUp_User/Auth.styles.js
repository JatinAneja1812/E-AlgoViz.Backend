import styled from "styled-components";

const LoginWrapper = styled.div`

    @import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
      
    .TitleLogin h1 {
        position:relative; 
        font-size:24px; 
        font-weight:700;  
        letter-spacing:0px; 
        text-transform:uppercase; 
        width:150px; 
        text-align:center; 
        margin:auto; 
        white-space:nowrap; 
        border:2px solid #222;
        padding:5px 11px 3px 11px;
        position: relative;
        top: -38px;
      }
      .TitleLogin h1:before, .TitleLogin h1:after {
          background-color: #c50000;
          position:absolute; 
          content: '';
          height: 7px;
      
          width: 7px; border-radius:50%;
          bottom: 12px;
      }
      .TitleLogin h1:before {
         left:-20px;
      }
      .TitleLogin h1:after {
         right:-20px;
      }

    
    .base-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .base-container .header {
    font-size: 24px;
    font-family: "Open Sans", sans-serif;
    }

    .base-container .mainheader {
    font-size: 20px;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    }

    .content {
    display: flex;
    flex-direction: column;
    }

    .content .image {
    width: 18em;
    }

    .form {
    margin-top: '5rem';
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .form .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
    font-size: 17px;
    }

    input {
    margin-top: 6px;
    min-width: 18em;
    height: 30px;
    padding: 0px 10px;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    background-color: #f3f3f3;
    border: 0;
    border-radius: 4px;
    margin-bottom: 31px;
    transition: all 250ms ease-in-out;
    }

    .form .form-group :hover {
    background-color: #ffffff;
    box-shadow: 0px 0px 14px 0.3px #0e81ce96;
    }

    .form .form-group :focus {
    outline: none;
    box-shadow: 0px 0px 12px 0.8px #3474dbb2;
    }

    .footer {
    margin-top: 3em;
    }
`;

const RegisterWrapper = styled.div`

    @import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

      .TitleReg h1 {
        position:relative; 
        font-size:24px; 
        font-weight:700;  
        letter-spacing:0px; 
        text-transform:uppercase; 
        width:150px; 
        text-align:center; 
        margin:auto; 
        white-space:nowrap; 
        border:2px solid #222;
        padding:5px 11px 3px 11px;
        position: relative;
        top: 20px;
      }
      .TitleReg h1:before, .TitleReg h1:after {
          background-color: #c50000;
          position:absolute; 
          content: '';
          height: 7px;
      
          width: 7px; border-radius:50%;
          bottom: 12px;
      }
      .TitleReg h1:before {
         left:-20px;
      }
      .TitleReg h1:after {
         right:-20px;
      }

    .regbase-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 8%;
    }
    
    .regbase-container .regheader {
        font-size: 24px;
        font-family: "Open Sans", sans-serif;
    }
    .regbase-container .main-regheader {
        font-size: 20px;
        font-family: "Open Sans", sans-serif;
        font-weight: 600;
    }
    
    .regcontent {
        display: flex;
        flex-direction: column;
    }
    
    .regcontent .image {
        width: 19em;
    }
    
    .regform {
        margin-top: '5rem';
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .regform .regform-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: fit-content;
        font-size: 16px;
    }
    
    input {
        margin-top: 6px;
        min-width: 18em;
        height: 27px;
        padding: 0px 10px;
        font-size: 16px;
        font-family: "Open Sans", sans-serif;
        background-color: #f3f3f3;
        border: 0;
        border-radius: 4px;
        margin-bottom: 25px;
        transition: all 250ms ease-in-out;
    }
    
    .regform .regform-group :hover {
        background-color: transparent;
        box-shadow: 0px 0px 14px 0.3px #0e81ce96;
    }
    
    .regform .regform-group :focus {
        outline: none;
        box-shadow: 0px 0px 12px 0.8px #3474dbb2;
    }
    
    .regfooter {
        margin-bottom: 3em;
    }
    
    
    .instructions {
        font-size: 0.75rem;
        border-radius: 0.5rem;
        background: linear-gradient(to bottom right, #2c2c2c,#464747 50%, #b1aeae 100%);
        color: #ebe4e4;
        font-weight: 400;
        padding: 0.25rem;
        position: relative;
        margin-top: -14px;
        bottom: -5px;
    }
    
    .instructions > svg {
        margin-right: 0.25rem;
    }
    
    .offscreen {
        position: absolute;
        left: -9999px;
    }
    
    .hide {
        display: none;
    }
    
    .valid {
        color: limegreen;
        margin-left: 0.25rem;
    }
    
    .invalid {
        color: red;
        margin-left: 0.25rem;
    }
    
    .errmsg {
        background-color: lightpink;
        color: firebrick;
        font-weight: bold;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
    }
    
    .line {
        display: inline-block;
    }
    
    
    #reset{
        color: darkblue;
    }
`;


export { LoginWrapper, RegisterWrapper };
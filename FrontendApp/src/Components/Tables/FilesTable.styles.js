import { Table } from "antd";
import styled from "styled-components";
import {
  transition,
  borderRadius,
} from "../../Utility/LibraryFunctions/StylesUtils";
import { palette } from "styled-theme";

const TableWrapper = styled(Table)`
    flex: auto;
    overflow: hidden;
    background-color: Whitesmoke;
    color: #000;
    
    .anticon.anticon-search {
        color: #fff !important;
    }
    .ant-table-column-sorter.ant-table-column-sorter-full {
        color: #fff !important;
    }
    .ant-table-content{
      overflow: hidden;
    }

    .ant-table-thead{
      height: 6vh;
    }    

    thead > tr > th {
        background-color: rgb(7, 101, 133) !important;
    }

    thead > tr > th {
        color: #eaeaea!important;
    }

    .ant-table.ant-table-bordered{
        background-color: transparent !omportant;
      }
    
      .ant-table-bordered.ant-table-thead > tr > th, .ant-table-bordered.ant-table-tbody > tr > td {
        border-right: 0px solid Whitesmoke !omportant;
      }
    
      .ant-table-thead > tr > th {
        color: ${palette("secondary", 2)};
        font-size: 13px;
        background-color: ${palette("secondary", 1)};
    
        &.ant-table-column-sort {
          background: ${palette("secondary", 1)};
          margin: ${(props) =>
            props["data-rtl"] === "rtl" ? "0 4px 0 0" : "0 0 0 4px"};
        }
      }
    
      .ant-table-thead > tr > th,
      .ant-table-tbody > tr > td {
        white-space: nowrap;
        text-align: ${(props) =>
          props["data-rtl"] === "rtl" ? "right" : "left"};
        height: 13px;
        padding: 9px;
        p {
          margin-bottom: 0;
        }
      }
    
      .ant-pagination.ant-table-pagination.ant-table-pagination-center.css-dev-only-do-not-override-diro6f{
        margin: 6px 0!important;
      }

      .ant-table-tbody > tr > td {
        font-family: 'Open Sans', sans-serif !important;
        font-size: 13px;
        font-weight: 700:
        vertical-align: text-top;
        color: ${palette("text", 3)};
        height: 37px;
    
        a {
          color: ${palette("primary", 0)};
          vertical-align: text-top;
          ${transition()};
    
          &:hover {
            color: ${palette("primary", 4)};
          }
        }
      }
    
      .ant-table-tbody > tr.dummy-row > td {
        span {
          display: none;
        }
    
        svg {
          display: none;
        }
      }
    
      .ant-table-tbody > tr.ant-table-row-level-0.ok:hover > td {
        background: unset !important;
      }
    
      table tr td.ant-table-selection-column {
        text-align: center !important;
      }
    
      .ant-table-thead > tr.ant-table-row-hover > td,
      .ant-table-tbody > tr.ant-table-row-hover > td,
      .ant-table-thead > tr:hover > td,
      .ant-table-tbody > tr:hover > td {
        background-color: transparent;
      }
    
      .ant-table-pagination {
        margin-right: 5px;
      }

      .ant-spin-nested-loading > div > .ant-spin {
        max-height: none;
    
        .ant-spin-dot i {
          color: ${palette("primary", 0)};
        }
      }

      .ant-table-header {
        background-color: transparent;
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        font-weight: 600;
      }
    
      .ant-table-title {
        background: ${palette("secondary", 1)};
        color: ${palette("secondary", 2)};
        font-size: 13px;
        font-weight: 600;
        padding: 16px 30px;
        ${borderRadius()};
      }
    
      .ant-table-footer {
        background: ${palette("secondary", 1)};
        color: ${palette("secondary", 2)};
        font-size: 14px;
        font-weight: 600;
        padding: 16px 30px;
        ${borderRadius()};
      }
    
      .ant-table-content {
        overflow-x: auto;
      }
    
      .ant-spin-nested-loading > div > .ant-spin {
        max-height: none;
    
        .ant-spin-dot i {
          color: ${palette('primary', 0)};
        }
      }
        
      .ant-table-column-title {
        position: relative;
        z-index: 1;
        flex: 1;
        font-size: 13px;
      }
      .ant-table-column-sorter-up.on .anticon-caret-up,
      .ant-table-column-sorter-down.on .anticon-caret-up,
      .ant-table-column-sorter-up.on .anticon-caret-down,
      .ant-table-column-sorter-down.on .anticon-caret-down {
        color: ${palette("primary", 0)};
      }
    
      &.collapsed {
        height: 0;
      }

      #load {
        position: relative;
        width: 600px;
        height: 42px;
        left: 50%;
        top: 25%;
        margin-left:-300px;
        overflow:visible;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        cursor:default;
      }
      
      #load div {
        position:absolute;
        width:20px;
        height:36px;
        opacity:0;
        font-size:18px;
        font-weight:600;
        font-family:Helvetica, Arial, sans-serif;
        animation:move 2s linear infinite;
        -o-animation:move 2s linear infinite;
        -moz-animation:move 2s linear infinite;
        -webkit-animation:move 2s linear infinite;
        transform:rotate(180deg);
        -o-transform:rotate(180deg);
        -moz-transform:rotate(180deg);
        -webkit-transform:rotate(180deg);
        color:#000;
      }
      
      #load div:nth-child(2) {
        animation-delay:0.2s;
        -o-animation-delay:0.2s;
        -moz-animation-delay:0.2s;
        -webkit-animation-delay:0.2s;
      }
      #load div:nth-child(3) {
        animation-delay:0.4s;
        -o-animation-delay:0.4s;
        -webkit-animation-delay:0.4s;
        -webkit-animation-delay:0.4s;
      }
      #load div:nth-child(4) {
        animation-delay:0.6s;
        -o-animation-delay:0.6s;
        -moz-animation-delay:0.6s;
        -webkit-animation-delay:0.6s;
      }
      #load div:nth-child(5) {
        animation-delay:0.8s;
        -o-animation-delay:0.8s;
        -moz-animation-delay:0.8s;
        -webkit-animation-delay:0.8s;
      }
      #load div:nth-child(6) {
        animation-delay:1s;
        -o-animation-delay:1s;
        -moz-animation-delay:1s;
        -webkit-animation-delay:1s;
      }
      #load div:nth-child(7) {
        animation-delay:1.2s;
        -o-animation-delay:1.2s;
        -moz-animation-delay:1.2s;
        -webkit-animation-delay:1.2s;
      }
      
      @keyframes move {
        0% {
          left:0;
          opacity:0;
        }
        35% {
          left: 41%; 
          -moz-transform:rotate(0deg);
          -webkit-transform:rotate(0deg);
          -o-transform:rotate(0deg);
          transform:rotate(0deg);
          opacity:1;
        }
        65% {
          left:59%; 
          -moz-transform:rotate(0deg); 
          -webkit-transform:rotate(0deg); 
          -o-transform:rotate(0deg);
          transform:rotate(0deg); 
          opacity:1;
        }
        100% {
          left:100%; 
          -moz-transform:rotate(-180deg); 
          -webkit-transform:rotate(-180deg); 
          -o-transform:rotate(-180deg); 
          transform:rotate(-180deg);
          opacity:0;
        }
      }
      
      @-moz-keyframes move {
        0% {
          left:0; 
          opacity:0;
        }
        35% {
          left:41%; 
          -moz-transform:rotate(0deg); 
          transform:rotate(0deg);
          opacity:1;
        }
        65% {
          left:59%; 
          -moz-transform:rotate(0deg); 
          transform:rotate(0deg);
          opacity:1;
        }
        100% {
          left:100%; 
          -moz-transform:rotate(-180deg); 
          transform:rotate(-180deg);
          opacity:0;
        }
      }
      
      @-webkit-keyframes move {
        0% {
          left:0; 
          opacity:0;
        }
        35% {
          left:41%; 
          -webkit-transform:rotate(0deg); 
          transform:rotate(0deg); 
          opacity:1;
        }
        65% {
          left:59%; 
          -webkit-transform:rotate(0deg); 
          transform:rotate(0deg); 
          opacity:1;
        }
        100% {
          left:100%;
          -webkit-transform:rotate(-180deg); 
          transform:rotate(-180deg); 
          opacity:0;
        }
      }
      
      @-o-keyframes move {
        0% {
          left:0; 
          opacity:0;
        }
        35% {
          left:41%; 
          -o-transform:rotate(0deg); 
          transform:rotate(0deg); 
          opacity:1;
        }
        65% {
          left:59%; 
          -o-transform:rotate(0deg); 
          transform:rotate(0deg); 
          opacity:1;
        }
        100% {
          left:100%; 
          -o-transform:rotate(-180deg); 
          transform:rotate(-180deg); 
          opacity:0;
        }
      }
    
`;
export default TableWrapper;

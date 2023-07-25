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

    thead > tr > th {
        background-color: #0E76BC !important;
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
    
`;
export default TableWrapper;

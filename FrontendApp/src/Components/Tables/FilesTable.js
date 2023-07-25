import React, { useState } from "react";
import { Button, Popconfirm, Row } from "antd";
import TableWrapper from "./FilesTable.styles";
import { FilesTableColumn } from "./Columns/FilesTableColumns";
import { DeleteOutlined, DownloadOutlined } from "@ant-design/icons";

const ERROR_MESSAGE =
  "An error occured while retrieving data. Please try to refresh the page.";
const NO_DATA_MESSAGE = "No files/documents found.";

export default function FilesTable(props) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const [currentPage, setCurrentPage] = useState(1); // 1 is a default current page for the table
  const [currentPageSize, setPageSize] = useState("12"); // 12 is a default page size for the table (must be a string)

  const CURRENT_PAGE_FROM_SESSION_STORAGE = sessionStorage.getItem(
    FilesTableColumn.tableKey + "CurrentPage"
  );
  const PAGE_SIZE_FROM_SESSION_STORAGE = sessionStorage.getItem(
    FilesTableColumn.tableKey + "PageSize"
  );

  const CurrentPage =
    sessionStorage.getItem(FilesTableColumn.tableKey + "Pagination") ===
    "undefined"
      ? false
      : sessionStorage.getItem(FilesTableColumn.tableKey + "Pagination");

  const handleTableChange = (pagination, filters, sorter) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);

    sessionStorage.setItem(
      FilesTableColumn.tableKey + "CurrentPage",
      pagination.current
    );
    sessionStorage.setItem(
      FilesTableColumn.tableKey + "PageSize",
      pagination.pageSize
    );
    sessionStorage.setItem(
      FilesTableColumn.tableKey + "SortColumn",
      sorter.columnKey
    );
    sessionStorage.setItem(
      FilesTableColumn.tableKey + "SortOrder",
      sorter.order
    );
  };

  const Loader = () => (
    <div id="load">
      <div>G</div>
      <div>N</div>
      <div>I</div>
      <div>D</div>
      <div>A</div>
      <div>O</div>
      <div>L</div>
    </div>
  );
  

  const operationColumns = [
    {
      title: "Download File",
      dataIndex: "operationDownload",
      align: "center",
      width: 30,
      render: (_, record) => {
        return (
          <>
            <Button
              type="link"
              style={{
                background: "rgb(7, 101, 133)",
                color: "#fff",
              }}
              onClick={() => props.handleFileDownload(record)}
              icon={
                <DownloadOutlined
                  style={{
                    fontSize: "large",
                    color: "#fff",
                  }}
                />
              }
            >
              Downlaod
            </Button>
          </>
        );
      },
    },
    {
      title: " ",
      dataIndex: "operationDelete",
      align: "center",
      width: 20,
      render: (_, record) => {
        if (record.uploadedBy !== props.userName) {
          return;
        }
        return (
          <>
            <Popconfirm
              title="Are you sure?"
              okText={"Yes"}
              cancelText={"No"}
              onConfirm={() => props.handleRemove(record)}
            >
              <Button
                type="link"
                icon={
                  <DeleteOutlined
                    style={{
                      fontSize: "large",
                      color: "#F01704",
                    }}
                  />
                }
              />
            </Popconfirm>
          </>
        );
      },
    },
  ];

  const columns = FilesTableColumn.columns.concat(operationColumns);

  const onSelectChange = (newSelectedRowKeys, selectedRows) => {
    props.setSelectedRows(selectedRows);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    hideSelectAll: false,
  };

  return (
    <Row>
      <TableWrapper
        key="Key"
        dataSource={props.filesUploaded}
        columns={columns}
        pagination={
          !CurrentPage
            ? { position: ["bottomCenter"], hideOnSinglePage: true }
            : {
                pageSizeOptions:
                  props.filesUploaded.length <= 100
                    ? ["20", "30", "50", "100"]
                    : [
                        "20",
                        "30",
                        "50",
                        "100",
                        props.filesUploaded.length.toString(),
                      ],
                position: ["bottomCenter"],
                hideOnSinglePage: true,
                current:
                  CURRENT_PAGE_FROM_SESSION_STORAGE == null
                    ? parseInt(currentPage)
                    : parseInt(CURRENT_PAGE_FROM_SESSION_STORAGE),
                pageSize:
                  PAGE_SIZE_FROM_SESSION_STORAGE == null
                    ? currentPageSize
                    : PAGE_SIZE_FROM_SESSION_STORAGE,
              }
        }
        bordered
        rowSelection={rowSelection}
        onChange={handleTableChange}
        loading={props.isLoading2}
        locale={
          props.isLoading
            ? {
                emptyText: Loader,
              }
            : props.error == null
            ? {
                emptyText: (
                  <h1 style={{ fontSize: "14px", color: "#000000" }}>
                    {NO_DATA_MESSAGE}
                  </h1>
                ),
              }
            : {
                emptyText: (
                  <h1 style={{ fontSize: "14px", color: "#C8230F" }}>
                    {ERROR_MESSAGE}
                  </h1>
                ),
              }
        }
      ></TableWrapper>
    </Row>
  );
}

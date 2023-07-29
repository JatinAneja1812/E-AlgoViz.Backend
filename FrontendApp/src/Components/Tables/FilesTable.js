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
  const [selectedAll, setSelectedAll] = useState(false);

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

  const customSelectionColumn = {
    title: (
      <input
        type="checkbox"
        checked={selectedAll}
        onChange={(e) => handleSelectAllRows(e.target.checked)}
        style={{
          visibility: props.userName ? "visible" : "hidden",
          width: "28px",
          height: "17px",
          // The visibility is set to hidden for users who are not logged in
          // so that they can't see the checkbox
        }}
        disabled={
          props.filesUploaded.length === 0 ||
          props.filesUploaded.filter(
            (record) => record.uploadedBy === props.userName
          ).length === 0
        }
      />
    ),
    dataIndex: "customSelection",
    width: 50,
    render: (_, record) => {
      if (record.uploadedBy !== props.userName) {
        return null; // Do not render the checkbox for rows that don't belong to the current user
      }
      let isAllSeletced = props.filesUploaded.filter(
        (record) => record.uploadedBy === props.userName
      ).length;
      if (isAllSeletced === selectedRowKeys.length) {
        setSelectedAll(true);
      } else {
        setSelectedAll(false);
      }

      return (
        <input
          type="checkbox"
          style={{ width: "28px", height: "17px" }}
          checked={selectedRowKeys.includes(record.key)}
          onChange={(e) => {
            const key = record.key;

            if (e.target.checked) {
              setSelectedRowKeys([...selectedRowKeys, key]);
            } else {
              setSelectedRowKeys(selectedRowKeys.filter((k) => k !== key));
            }
          }}
        />
      );
    },
  };

  const handleSelectAllRows = (checked) => {
    const allRowKeys = props.filesUploaded
      .filter((record) => record.uploadedBy === props.userName)
      .map((record) => record.key);

    if (checked) {
      setSelectedRowKeys([...selectedRowKeys, ...allRowKeys]);
    } else {
      setSelectedRowKeys(
        selectedRowKeys.filter((key) => !allRowKeys.includes(key))
      );
    }
    setSelectedAll(checked);
  };

  const getDeleteAll = () => {
    let fileToRemove = props.filesUploaded.filter((record) =>
      selectedRowKeys.includes(record.key)
    );
    props.handleRemove(fileToRemove);
    setSelectedAll(false);
  };

  return (
    <>
      <Row
        style={{ background: " rgb(7, 101, 133)", border: "1px solid #ececec" }}
      >
        <Button
          style={{
            background: "transparent",
            border: "1px solid #ececec",
            borderRadius: "0",
            color: "#fff",
          }}
          loading={props.isLoading2}
          disabled={selectedRowKeys.length < 2}
          icon={<DeleteOutlined />}
          onClick={getDeleteAll}
        >
          Delete All
        </Button>
      </Row>
      <Row>
        <TableWrapper
          key="Key"
          dataSource={props.filesUploaded.map((record) => ({
            ...record,
            key: record.key, // Assuming each file has an "id" property to uniquely identify it
          }))}
          columns={[customSelectionColumn, ...columns]}
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
          rowSelection={false}
          rowKey="key"
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
    </>
  );
}

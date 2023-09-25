import { SearchOutlined, FilePdfOutlined, FileTextOutlined, FileWordOutlined, FileImageOutlined } from "@ant-design/icons";
import SearchInputDropdown from "../../Dropdowns/SearchInputDropDown";
import {
  CompareDates,
  TransformIntoDateTimeString,
} from "../../../Utility/LibraryFunctions/DatesUtility";
import { formatFileSize } from "../../../Utility/LibraryFunctions/FilesSizeUtility";

const DateTimeCell = (date) =>
  date != null ? <p>{TransformIntoDateTimeString(date, false)}</p> : null;

const FilesTableColumn = {
  tableKey: "FilesManagerTable",
  columns: [
    {
      title: "File Name",
      key: "fileName",
      width: 600,
      filterDropdown: SearchInputDropdown,
      filterIcon: <SearchOutlined />,
      render: (object) => {
        return (
          <>
            {object.fileType === "application/pdf" ? (
              <FilePdfOutlined style={{ marginRight: 14, color: "#1677ff", fontSize: "21px" }} />
            ) : object.fileType === "text/plain" ? (
              <FileTextOutlined style={{ marginRight: 14, color: "#1677ff", fontSize: "21px" }} />
            ) : object.fileType === "image/jpeg" ||  object.fileType === "image/png" ? (
              <FileImageOutlined style={{ marginRight: 14, color: "#1677ff", fontSize: "21px" }} />
            ) : (
              <FileWordOutlined style={{ marginRight: 14, color: "#1677ff", fontSize: "21px" }} />
            )}
            {object.fileName.toString()}
          </>
        );
      },
      onFilter: (value, record) => {
        return value.length === 0
          ? true
          : record.fileName == null
          ? false
          : record.fileName.toLowerCase().includes(value[0].toLowerCase());
      },
      sorter: {
        compare: (a, b) => {
          return a.fileName === undefined || b.fileName === undefined
            ? null
            : a.fileName.localeCompare(b.fileName);
        },
      },
    },
    {
      title: "File Size",
      key: "size",
      render: (object) => {
        return formatFileSize(parseInt(object.size, 10));
      },
      sorter: {
        compare: (a, b) => {
          return a.size === undefined || b.size === undefined
            ? null
            : parseInt(a.size, 10) - (parseInt(b.size, 10));
        },
      },
    },
    {
      title: "File Type",
      key: "fileType",
      filterDropdown: SearchInputDropdown,
      render: (object) => {
        if (object.fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
          return "application/msword";
        } else {
          return object.fileType.toString();
        }
      },
      filterIcon: <SearchOutlined />,
      onFilter: (value, record) => {
        return value.length === 0
          ? true
          : record.fileType == null
          ? false
          : record.fileType.toLowerCase().includes(value[0].toLowerCase());
      },
      sorter: {
        compare: (a, b) => {
          return a.fileType === undefined || b.fileType === undefined
            ? null
            : a.fileType.localeCompare(b.fileType);
        },
      },
    },
    {
      title: "Uploaded By",
      key: "uploadedBy",
      filterDropdown: SearchInputDropdown,
      filterIcon: <SearchOutlined />,
      render: (object) => {
        return object.uploadedBy.toString();
      },
      onFilter: (value, record) => {
        return value.length === 0
          ? true
          : record.uploadedBy == null
          ? false
          : record.uploadedBy.toLowerCase().includes(value[0].toLowerCase());
      },
      sorter: {
        compare: (a, b) => {
          return a.uploadedBy === undefined || b.uploadedBy === undefined
            ? null
            : a.uploadedBy.localeCompare(b.uploadedBy);
        },
      },
    },
    {
      title: "Date Uploaded",
      key: "dateModified",
      render: (object) => DateTimeCell(object.dateModified),
      sorter: {
        compare: (a, b) => {
          return a.dateModified === undefined || b.dateModified === undefined
            ? null
            : CompareDates(a.dateModified, b.dateModified);
        },
      },
    },
  ],
};

export { FilesTableColumn };

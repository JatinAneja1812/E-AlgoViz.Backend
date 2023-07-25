import React, { useState, useRef, useEffect } from "react";
import { Tabs, Button, Upload, message, Spin } from "antd";
import { UploadOutlined, FileOutlined, InboxOutlined } from "@ant-design/icons";
import {
  FileManagerWrapper,
  UploadWrapper,
  DownloadWrapper,
} from "./FileManager.styles";
import ErrorNotification from "../Snackbar/ErrorSnackbar";
import { storage } from "../../Authentication/Firebase/Firebase";
import {
  ref,
  uploadString,
  getMetadata,
  list,
  getDownloadURL,
  deleteObject
} from "firebase/storage";
import FilesTable from "../Tables/FilesTable";

const { Dragger } = Upload;

export default function FileManager() {
  const [uploadArray, setUploadArray] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [currUserName, setCurrUserName] = useState(null);
  const [fileDetails, setFileDetails] = useState([]);
 const [isLoading, setIsLoading] = useState(false); 
 const [isLoading2, setIsLoading2] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const uploadTest = useRef([]);
  const userName = currUserName;

  useEffect(() => {
    setCurrUserName(JSON.parse(sessionStorage.getItem("userName")));
    return () => currUserName;
  }, [currUserName]);

  const props = {
    name: "file",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
    },
    multiple: true,
    beforeUpload: (file) => {
      if (file.type === "application/pdf" || file.type === "text/plain") {
        let fileList = uploadTest.current;
        fileList.push(file);

        uploadTest.current = fileList;

        setUploadArray(uploadTest.current);
        setButtonDisabled(!(uploadTest.current.length > 0));

        return false;
      } else {
        message.error("Please select only PDF or TXT files.");
        return false;
      }
    },
    onRemove: (file) => {
      const index = uploadTest.current.indexOf(file);
      const newFileList = uploadTest.current.slice();
      newFileList.splice(index, 1);

      uploadTest.current = newFileList;
      setUploadArray(uploadTest.current);
      setButtonDisabled(!(uploadTest.current.length > 0));
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const uploadFiles = async () => {
    const filesArray = uploadTest.current;
    setIsUploading(true);
    setButtonDisabled(true); // Disable the upload button during the upload process
    try {
      const fileDetails = [];

      // Loop through the files array
      for (const file of filesArray) {
        const originalFilename = file.name;

        // Read the file as a data URL (synchronous operation)
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
          const dataURL = reader.result;

          const storageRef = ref(
            storage,
            `uploads/${userName}/${originalFilename}`
          );
          await uploadString(storageRef, dataURL, "data_url");

          // Get the file metadata
          const metadata = await getMetadata(storageRef);

          // Extract the information you need
          const fileInfo = {
            fileName: metadata.name,
            size: metadata.size,
            dateModified: metadata.updated,
            uploadedBy: userName,
            fileType: metadata.contentType,
          };

          fileDetails.push(fileInfo);

          // If all files are uploaded, reset the UI states
          if (fileDetails.length === filesArray.length) {
            uploadTest.current = [];
            setUploadArray([]);
            setIsUploading(false);
            setButtonDisabled(false);
          }
        };
      }
      return fileDetails;
    } catch (error) {
      uploadTest.current = [];
      setIsUploading(false);
      setUploadArray([]);
      setButtonDisabled(false);
      console.error("Error uploading files:", error);
      throw error;
    }
  };

  const getFileDetailsFromStorage = async () => {
    
    try {
      const storageRef = ref(storage, "uploads");
      const listResult = await list(storageRef);

      const uploadedFileInfo = [];

      for (const prefix of listResult.prefixes) {
        const listResultPerUser = await list(prefix);

        for (const item of listResultPerUser.items) {
          const metadata = await getMetadata(item);
          const downloadURL = await getDownloadURL(item); // Get the download URL

          const fileInfo = {
            fileName: metadata.name,
            size: metadata.size,
            dateModified: metadata.updated,
            fileType: metadata.contentType,
            uploadedBy: prefix.name.split("/").slice(-1)[0], // Extract the username from the prefix
            downloadURL: downloadURL, // Add the download URL to the fileInfo
          };

          uploadedFileInfo.push(fileInfo);
        }
      }

      let count = 0
      uploadedFileInfo.forEach(function (data) {
          data.key = count
          count += 1
      });

      setFileDetails(uploadedFileInfo);
      setIsOpen(false);
      
    } catch (error) {
      setIsOpen(true);
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchFileDetails = async () => {
      try {
        setIsLoading(true);
        await getFileDetailsFromStorage();
        setIsLoading(false);
      } catch (error) {
        setIsOpen(true);
        setError(error);
      }
    };
    fetchFileDetails();
    return;
  }, []);

  const handleFileDownload = (record) => {
    try {
      const downloadURL = record.downloadURL;
      const fileName = record.fileName;
      
      // Create a temporary anchor element to trigger the download
      const downloadLink = document.createElement("a");
      downloadLink.href = downloadURL;
      downloadLink.target = "_blank"; // Open the download in a new tab
      downloadLink.download = fileName; // Set the downloaded file name
      
      // Append the anchor element to the DOM (not visible to the user)
      document.body.appendChild(downloadLink);
      downloadLink.click();
      // Remove the anchor element from the DOM after the download is initiated
      document.body.removeChild(downloadLink);
    } catch (error) {
      setError(error);
      setIsOpen(true);
    }
  };
  
  const handleRemove = async (recordsToRemove) => {
    setIsLoading2(true);
    const recordsArray = Array.isArray(recordsToRemove) ? recordsToRemove : [recordsToRemove];
    try {

      for (const record of recordsArray) {
        console.log(record)
        const storageRef = ref(storage, `uploads/${userName}/${record.fileName}`);
        await deleteObject(storageRef);
      }
      
      getFileDetailsFromStorage();
      
    } catch (error) {
      setError(error);
      setIsOpen(true);
      setIsLoading2(false);
    }
    setIsLoading2(false);
  }

  const UploadTabPane = () => (
    <UploadWrapper>
      <Spin size="large" spinning={isUploading} delay={500}>
        <Dragger
          {...props}
          listType="text"
          fileList={uploadArray}
          disabled={isUploading}
          type={"file"}
          name="file"
          accept={".pdf, .txt"}
          style={{
            height: "195vh",
            width: "115vh",
            outline: "2px dashed black",
            outlineoffset: "-10px",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            alignSelf: "center",
          }}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined style={{ height: "9vh", fontSize: "55px" }} />
          </p>
          <p
            className="ant-upload-text"
            style={{ height: "10vh", fontSize: "20px" }}
          >
            <strong>
              Click or drag Single/Multiple "*.pdf or *.txt " files to this area
              to import it to Unity
            </strong>
          </p>
          <p
            className="ant-upload-hint"
            style={{ fontSize: "20px", height: "8vh" }}
          >
            <strong>Support for a single or bulk upload.</strong>
          </p>
        </Dragger>
      </Spin>
      <Button
        type="primary"
        onClick={uploadFiles}
        disabled={buttonDisabled}
        style={{ marginTop: 16, marginLeft: 16 }}
      >
        Start Upload
      </Button>
    </UploadWrapper>
  );

  const DownloadTabPane = () => (
    
    <DownloadWrapper>
     <FilesTable 
        isLoading={isLoading}
        isLoading2={isLoading2}
        filesUploaded={fileDetails}
        setSelectedRows={setSelectedRows}
        selectedRows={selectedRows}
        handleFileDownload={handleFileDownload}
        handleRemove={handleRemove}
        userName={userName}
     />
    </DownloadWrapper>
  );

  return (
    <>
      {isOpen && (
        <ErrorNotification
          message={error}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      )}

      <FileManagerWrapper>
        <Tabs centered defaultActiveKey="1">
        <Tabs.TabPane
            tab={
              <span>
                <FileOutlined />
                File Display & Download
              </span>
            }
            key="1"
            onClick={() => getFileDetailsFromStorage()}
          >
            <DownloadTabPane />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <span>
                <UploadOutlined />
                File Upload
              </span>
            }
            key="2"
          >
            <UploadTabPane />
          </Tabs.TabPane>
        </Tabs>
      </FileManagerWrapper>
    </>
  );
}

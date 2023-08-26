import styled from "styled-components";

const FileManagerWrapper = styled.div`
  .ant-tabs.ant-tabs-top.css-dev-only-do-not-override-diro6f {
    margin: 100px !important;
  }

  .ant-tabs-nav {
    font-weight: 800;
  }

  .ant-tabs-tab.ant-tabs-tab-active {
    font-size: 18px;
  }
`;

const UploadWrapper = styled.div`
  .ant-upload.ant-upload-btn {
    background: whitesmoke;
  }

  .ant-upload-list-item.ant-upload-list-item-undefined {
    color: #fff;
  }

  .anticon.anticon-paper-clip {
    color: #fff;
  }

  .ant-upload.ant-upload-drag.css-dev-only-do-not-override-diro6f {
    width: 100% !important;
  }
`;

const DownloadWrapper = styled.div``;

export { FileManagerWrapper, UploadWrapper, DownloadWrapper };

import { Col, Row } from "antd";
import React from "react";
import Code from "../../../../components/modules/code";
import { GetAllFileInFolderData } from "./data";

const GetAllFileInFolder = () => {
  return (
    <>
      <h1>Get All File In Folder</h1>
      <Row justify="start">
        <Col span={24}>
            <p>Function</p>
            <Code code={GetAllFileInFolderData.getAllFile} language="csharp" />
            <br />
            <p>DirSearch</p>
            <Code code={GetAllFileInFolderData.DirSearch} language="csharp" />
        </Col>
      </Row>
    </>
  );
};

export default GetAllFileInFolder;

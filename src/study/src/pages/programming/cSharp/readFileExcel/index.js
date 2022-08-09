import { Col, Row } from "antd";
import React from "react";
import Code from "../../../../components/modules/code";
import { ReadFileExcelData } from "./data";

const ReadFileExcel = () => {
  return (
    <>
      <h1>Read File Excel</h1>
      <Row justify="start">
        <Col span={24}>
            <p>Using</p>
            <Code code={ReadFileExcelData.using} language="csharp" />
            <br />
            <p>Function</p>
            <Code code={ReadFileExcelData.function} language="csharp" />
        </Col>
      </Row>
    </>
  );
};

export default ReadFileExcel;

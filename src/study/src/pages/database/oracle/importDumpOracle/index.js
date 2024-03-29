import { Col, Row } from "antd";
import React from "react";
import Code from "../../../../components/modules/code";
import { ImportDumpOracleData } from "./data";

const ImportDumpOracle = () => {
  return (
    <>
      <h1>Import file dump Oracle</h1>
      <Row justify="start">
        <Col span={24}>
          <h1>1. Chuẩn bị</h1>
          <Code code={ImportDumpOracleData.prepare} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>2.</h1>
          <Code code={ImportDumpOracleData.one} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>3.</h1>
          <Code code={ImportDumpOracleData.two} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>4.</h1>
          <Code code={ImportDumpOracleData.three} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>5.</h1>
          <Code code={ImportDumpOracleData.four} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>6. Tạo DIRECTORY</h1>
          <Code code={ImportDumpOracleData.five} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>7. Mở CMD mới</h1>
          <Code code={ImportDumpOracleData.six} language="markup" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <p><i>Thư mục lưu file tablespace: D:\app\tantq\virtual\product\12.2.0\dbhome_1\database</i></p>
        </Col>
      </Row>
    </>
  );
};

export default ImportDumpOracle;

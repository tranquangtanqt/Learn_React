import { Col, Row } from "antd";
import React from "react";
import Code from "../../../../components/modules/code";
import MasterLayout from "../../../../themes/masterLayout";
import { ImportDumpOracleData } from "./data";

const ImportDumpOracle = () => {
  return (
    <MasterLayout>
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
    </MasterLayout>
  );
};

export default ImportDumpOracle;

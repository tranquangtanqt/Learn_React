import { Col, Row } from "antd";
import React from "react";
import Code from "../../../../components/modules/code";
import { ImportDumpOracleData } from "./data";

const DumpFull = () => {
  return (
    <>
      <h1>Import file dump Oracle Full</h1>
      <Row justify="start">
        <Col span={24}>
          <Code code={ImportDumpOracleData.seven} language="sql" />
        </Col>
      </Row>
    </>
  );
};

export default DumpFull;

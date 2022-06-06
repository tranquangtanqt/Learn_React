import { Col, Row } from "antd";
import React from "react";
import MasterLayout from "../../../../themes/masterLayout";
import { ConfigPghbaData } from "./data";
import Code from "../../../../components/modules/code";

const ConfigPghba = () => {
  return (
    <MasterLayout>
      <h1>Database config</h1>
      <Row justify="start">
        <Col span={24}>
          <p>Edit pg_hba.conf</p>
          <Code code={ConfigPghbaData.pghba} language="csharp" />
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default ConfigPghba;

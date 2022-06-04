
import { Col, Row } from "antd";
import React from "react";
import Code from "../../../../components/modules/code";
import MasterLayout from "../../../../themes/masterLayout";
import { ConnectPostgresqlData } from "./data";

const ConnectPostgresqlCsharp = () => {
  return (
    <MasterLayout>
      <h1>Connect and Select Postgresql</h1>
      <Row justify="start">
        <Col span={24}>
            <p>Function1</p>
            <Code code={ConnectPostgresqlData.function1} language="csharp" />
            <br />
            <p>Function2</p>
            <Code code={ConnectPostgresqlData.function2} language="csharp" />
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default ConnectPostgresqlCsharp;

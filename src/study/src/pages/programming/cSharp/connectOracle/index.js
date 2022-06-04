import { Col, Image, Row } from "antd";
import React from "react";
import Code from "../../../../components/modules/code";
import MasterLayout from "../../../../themes/masterLayout";
import { ConnectOracleData } from "./data";

const ConnectOracleCSharp = () => {
  return (
    <MasterLayout>
      <h1>Connect and Select from database Oracle</h1>
      <Row justify="start">
        <Col span={24}>
          <p>Install Nuget: Oracle.ManagedDataAccess</p>
          <Image
            src={require("../../../../resources/img/programming/csharp/CSharp1.jpg")}
          />
          <br />
          <br />
          <p>Using</p>
          <Code code={ConnectOracleData.using} language="csharp" />
          <br />
          <p>Function</p>
          <Code code={ConnectOracleData.function} language="csharp" />
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default ConnectOracleCSharp;

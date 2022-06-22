import { Col, Row } from "antd";
import React from "react";
import Code from "../../../../components/modules/code";
import MasterLayout from "../../../../themes/masterLayout";
import { EPPlusData } from "./data";

const EPPlus = () => {
  return (
    <MasterLayout>
      <h1>EPPlus</h1>
      <Row justify="start">
        <Col span={24}>
          <p>
            <b>1. Write Excel</b>
          </p>
        </Col>

        <Col span={23} offset={1}>
          <Code code={EPPlusData.writeExcel} language="csharp" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <p>
            <b>2. Read Excel</b>
          </p>
        </Col>
        <Col span={23} offset={1}>
          <Code code={EPPlusData.readExcel} language="csharp" />
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default EPPlus;

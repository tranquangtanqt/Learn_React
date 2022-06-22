import { Col, Row } from "antd";
import React from "react";
import Code from "../../../../components/modules/code";
import MasterLayout from "../../../../themes/masterLayout";
import { PHPConvertDatetimeData } from "./data";

const PHPConvertDatetime = () => {
  return (
    <MasterLayout>
      <h1>Convert Datetime</h1>
      <Row justify="start">
        <Col span={24}>
         <Code code={PHPConvertDatetimeData.one} language="php" />
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default PHPConvertDatetime;

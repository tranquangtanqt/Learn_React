import { Col, Row } from "antd";
import React from "react";
import Code from "../../../../components/modules/code";
import MasterLayout from "../../../../themes/masterLayout";
import { PHPSubstringEllipsesData } from "./data";

const PHPSubstringEllipses = () => {
  return (
    <MasterLayout>
      <h1>Chuyển chuỗi Unicode thành chuỗi không dấu</h1>
      <Row justify="start">
        <Col span={24}>
         <Code code={PHPSubstringEllipsesData.one} language="php" />
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default PHPSubstringEllipses;

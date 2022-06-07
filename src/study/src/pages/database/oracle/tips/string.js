import { Col, Row } from "antd";
import React from "react";
import Code from "../../../../components/modules/code";

import MasterLayout from "../../../../themes/masterLayout";

const StringOracle = () => {
  return (
    <MasterLayout>
      <Row justify="start">
        <Col span={24}>
          <h1>1. Adding leading zeros</h1>
          <Code code={`Select LPAD('12H89', 10, '0') FROM DUAL; --0000012H89`} language="sql" />
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default StringOracle;

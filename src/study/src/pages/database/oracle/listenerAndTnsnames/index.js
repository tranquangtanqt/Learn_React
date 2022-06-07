import { Col, Row } from "antd";
import React from "react";
import Code from "../../../../components/modules/code";

import MasterLayout from "../../../../themes/masterLayout";
import { ListenerAndTnsnamesData } from "./data";

const ListenerAndTnsnames = () => {
  return (
    <MasterLayout>
      <h1>Database Oracle</h1>
      <Row justify="start">
        <Col span={24}>
          <h1>1. listener.ora</h1>
          <Code code={ListenerAndTnsnamesData.listener} language="javascript" />
          <h1>2. tnsnames.ora</h1>
          <Code code={ListenerAndTnsnamesData.tnsnames} language="javascript" />
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default ListenerAndTnsnames;

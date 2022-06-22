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
          <h1>1. listener.ora original</h1>
        </Col>

        <Col span={23} offset={1}>
          <Code code={ListenerAndTnsnamesData.listener} language="javascript" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>2. tnsnames.ora original</h1>
        </Col>

        <Col span={23} offset={1}>
          <Code code={ListenerAndTnsnamesData.tnsnames} language="javascript" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>3. listener.ora remote</h1>
        </Col>

        <Col span={23} offset={1}>
          <Code code={ListenerAndTnsnamesData.listenerRemote} language="javascript" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>4. tnsnames.ora remote</h1>
        </Col>

        <Col span={23} offset={1}>
          <Code code={ListenerAndTnsnamesData.tnsnamesRemote} language="javascript" />
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default ListenerAndTnsnames;

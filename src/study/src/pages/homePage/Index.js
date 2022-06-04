import { Card, Col, Row } from "antd";
import React from "react";

import MasterLayout from "../../themes/masterLayout";

const Home = () => {
  return (
    <MasterLayout>
      <h1>Home page</h1>
      <Row justify="start">
        <Col span={8}>
          <Card title="Database">
            <a href="https://dbfiddle.uk/" target="_blank" rel="noopener noreferrer">dbfiddle</a>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Image - Video">
            <a href="https://www.usebubbles.com/" target="_blank" rel="noopener noreferrer">usebubbles _ screen</a>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="SQL">
            
          </Card>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default Home;

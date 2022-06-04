import { Card, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import MasterLayout from "../../../themes/masterLayout";

const ProgrammingCSharp = () => {
  return (
    <MasterLayout>
      <h1>C Sharp</h1>
      <Row justify="start">
        <Col span={8}>
          <Card title="File">
            <Link to={"/"}>
              {"1. Get all file in folder"}
            </Link>
            <br />
            <Link to={"/"}>
              {"2. Read file excel"}
            </Link>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Database">
            <Link to={"/"}>
              {"1. Connect and select Postgresql"}
            </Link>
            <br />
            <Link to={"/"}>
              {"2. Connect and select Oracle"}
            </Link>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="TODO"></Card>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default ProgrammingCSharp;

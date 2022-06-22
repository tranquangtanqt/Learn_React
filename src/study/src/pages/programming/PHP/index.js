import { Card, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import MasterLayout from "../../../themes/masterLayout";

const ProgrammingPHP = () => {
  return (
    <MasterLayout>
      <h1>PHP</h1>
      <Row justify="start">
        <Col span={8}>
          <Card title="Convert">
            <Link to={"/programming-php/convertDatetime"}>
              {"1. Chuyển đổi Datetime"}
            </Link>
            <br />
            <Link to={"/programming-php/convertUnicode"}>
              {"2. Chuyển chuỗi Unicode thành chuỗi không dấu"}
            </Link>
            <br />
            <Link to={"/programming-php/substringEllipses"}>
              {"3. Cắt chuỗi với dấu ba chấm (ellipses)"}
            </Link>
            <br />
          </Card>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default ProgrammingPHP;

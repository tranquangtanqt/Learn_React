import { Card, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const ProgrammingPHP = () => {
  return (
    <>
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
            <Link to={"/programming-php/phpDeleteFile"}>
              {"4. Xóa tệp"}
            </Link>
            <br />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProgrammingPHP;

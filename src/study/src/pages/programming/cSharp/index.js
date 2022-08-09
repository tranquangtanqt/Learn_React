import { Card, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const ProgrammingCSharp = () => {
  return (
    <>
      <h1>C Sharp</h1>
      <Row justify="start">
        <Col span={8}>
          <Card title="Coding">
            <Link to={"/programming-csharp/nameControlWinform"}>
              {"1. Name Control Winform"}
            </Link>
            <br />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="File">
            <Link to={"/programming-csharp/getAllFileInFolder"}>
              {"1. Get all file in folder"}
            </Link>
            <br />
            <Link to={"/programming-csharp/readFileExcel"}>
              {"2. Read file excel"}
            </Link>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Database">
            <Link to={"/programming-csharp/connectPostgresql"}>
              {"1. Connect and select Postgresql"}
            </Link>
            <br />
            <Link to={"/programming-csharp/connectOracle"}>
              {"2. Connect and select Oracle"}
            </Link>
          </Card>
        </Col>
      </Row>

      <Row justify="start">
        <Col span={8}>
          <Card title="Library">
            <Link to={"/programming-csharp/EPPlus"}>{"1. EPPLUS"}</Link>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProgrammingCSharp;

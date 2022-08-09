import { Card, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const DatabasePostgresql = () => {
  return (
    <>
      <h1>Database Postgresql</h1>
      <Row justify="start">
        <Col span={8}>
          <Card title="File">
            <Link to={"/database/postgresql/configPghba"}>
              {"1. Configure PostgreSQL to accept all incoming connections"}
            </Link>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="TODO"></Card>
        </Col>
      </Row>
    </>
  );
};

export default DatabasePostgresql;

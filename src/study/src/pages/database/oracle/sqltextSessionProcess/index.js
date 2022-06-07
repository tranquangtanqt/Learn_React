import { Col, Row, Table } from "antd";
import React from "react";
import Code from "../../../../components/modules/code";
import MasterLayout from "../../../../themes/masterLayout";
import { SqltextSessionProcessData } from "./data";

const SqltextSessionProcess = () => {
  const dataSource1 = [
    {
      key: "1",
      name: "V$PROCESS",
      address: "SYNONYM",
    },
    {
      key: "2",
      name: "V$SESSION",
      address: "SYNONYM",
    },
    {
      key: "3",
      name: "V$SQLTEXT",
      address: "SYNONYM",
    },
  ];

  const columns1 = [
    {
      title: "OBJECT_NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "OBJECT_TYPE",
      dataIndex: "address",
      key: "address",
    },
  ];

  const dataSource2 = [
    {
      key: "1",
      name: "SYS",
      address: "V_$PROCESS",
    },
    {
      key: "2",
      name: "SYS",
      address: "V_$SESSION",
    },
    {
      key: "3",
      name: "SYS",
      address: "V_$SQLTEXT",
    },
  ];

  const columns2 = [
    {
      title: "TABLE_OWNER",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "TABLE_NAME",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <MasterLayout>
      <h1>Sqltext Session Process</h1>
      <Row justify="start">
        <Col span={24}>
          <Code code={SqltextSessionProcessData.sql1} language="sql" />
        </Col>
        <Col span={24}>
          <Table dataSource={dataSource1} columns={columns1} bordered />;
        </Col>
      </Row>
      <Row justify="start">
        <Col span={24}>
          <Code code={SqltextSessionProcessData.sql2} language="sql" />
        </Col>
        <Col span={24}>
          <Table dataSource={dataSource2} columns={columns2} bordered />;
        </Col>
      </Row>
      <Row justify="start">
        <Col span={24}>
          <Code code={SqltextSessionProcessData.sql3} language="sql" />
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default SqltextSessionProcess;

import { Card, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import MasterLayout from "../../../themes/masterLayout";

const DatabaseOracle = () => {
  return (
    <MasterLayout>
      <h1>Database Oracle</h1>
      <Row justify="start">
        <Col span={8}>
          <Card title="Oracle SQL Developer">
            <Link to={"/database/oracle/changeLanguageOracleSQLDeveloper"}>
              {"1. Change Language Oracle SQL Developer"}
            </Link>
            <br />
            <Link to={"/database/oracle/tipsForOracleSQLDeveloper"}>
              {"2. Tips for oracle SQL developer"}
            </Link>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Dump">
          <Link to={"/database/oracle/importDumpOracle"}>
              {"1. Import file dump Oracle"}
            </Link>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Config">
          <Link to={"/database/oracle/listenerAndTnsnames"}>
              {"1. Listener and Tnsnames"}
            </Link>
          </Card>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default DatabaseOracle;

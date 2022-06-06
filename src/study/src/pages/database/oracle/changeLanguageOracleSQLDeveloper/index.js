import { Col, Row } from "antd";
import React from "react";
import MasterLayout from "../../../../themes/masterLayout";

const ChangeLanguageOracleSQLDeveloper = () => {
  return (
    <MasterLayout>
      <Row>
        <Col span={24}>
          <h1>Change Language Oracle SQL Developer</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>Open file: product.conf</p>
          <p><i>%APPDATA%\sqldeveloper\[version]\product.conf</i></p>
          <p>Add: AddVMOption -Duser.language=en</p>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default ChangeLanguageOracleSQLDeveloper;

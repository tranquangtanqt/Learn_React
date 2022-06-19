import { Card, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import MasterLayout from "../../../themes/masterLayout";

const ProgrammingJava = () => {
  return (
    <MasterLayout>
      <h1>Java</h1>
      <Row justify="start">
        <Col span={8}>
          <Card title="Spring Boot, Hibernate, H2 Database">
            <Link to={"/programming-java/settingMaven"}>
              {"1. Cài đặt maven và tạo project"}
            </Link>
            <br />
            <Link to={"/programming-java/selectData1"}>
              {"2.1 Select dữ liệu"}
            </Link>
            <br />
            <Link to={"/programming-java/insertData1"}>
              {"2.2 Insert dữ liệu"}
            </Link>

            <br />
            <Link to={"/programming-java/updateData1"}>
              {"2.3. Update dữ liệu"}
            </Link>

            <br />
            <Link to={"/programming-java/deleteData1"}>
              {"2.4. Delete dữ liệu"}
            </Link>

            <br />
            <Link to={"/programming-java/"}>
              {"3.1 Select dữ liệu"}
            </Link>

            <br />
            <Link to={"/programming-java/"}>
              {"3.2 Insert dữ liệu"}
            </Link>

            <br />
            <Link to={"/programming-java/"}>
              {"3.3 Update dữ liệu"}
            </Link>

            <br />
            <Link to={"/programming-java/"}>
              {"3.4 Delete dữ liệu"}
            </Link>
          </Card>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default ProgrammingJava;

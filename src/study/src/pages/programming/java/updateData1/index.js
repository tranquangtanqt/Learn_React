import { Col, Image, Row } from "antd";
import React from "react";
import Code from "../../../../components/modules/code";
import { UpdateData1Data } from "./data";

const UpdateData1 = () => {
  return (
    <>
      <h1>Update dữ liệu</h1>
      <Row justify="start">
        <Col span={24}>
          <b>1. Cấu trúc project</b>
        </Col>
        <Col span={23} offset={1}>
          <Image src={require("../../../../resources/img/programming/java/11.jpg")} />
          <br />
          <br />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>2. pom.xml</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={UpdateData1Data.pom} language="xml" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>3. application.properties</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={UpdateData1Data.application} language="xml" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>4. data.sql</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={UpdateData1Data.data} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>5. Book.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={UpdateData1Data.book} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>6. Author.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={UpdateData1Data.author} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>7. BookDao.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={UpdateData1Data.bookDao} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>8. BookDaoImpl.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={UpdateData1Data.bookDaoImpl} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>9. BookService.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={UpdateData1Data.bookService} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>10. BookServiceImpl.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={UpdateData1Data.bookServiceImpl} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>11. BookController.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={UpdateData1Data.bookController} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>12. SpringwebappApplication.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={UpdateData1Data.springwebappApplication} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>13. Kết quả khi chạy chương trình</b>
          
        </Col>
        <Col span={23} offset={1}>
          <i>Dữ liệu H2 database trước khi update</i>
        </Col>
        <Col span={22} offset={2}>
          <Image src={require("../../../../resources/img/programming/java/12.jpg")} />
            <br />
            <br />
          <Image src={require("../../../../resources/img/programming/java/13.jpg")} />
            <br />
            <br />
        </Col>

        <Col span={23} offset={1}>
          <i>http://localhost:9090/updatebook</i>
        </Col>
        <Col span={22} offset={2}>
          <Image src={require("../../../../resources/img/programming/java/17.jpg")} />
        </Col>

        <Col span={23} offset={1}>
          <i>Dữ liệu H2 database sau khi update</i>
        </Col>
        <Col span={22} offset={2}>
          <Image src={require("../../../../resources/img/programming/java/18.jpg")} />
        </Col>
      </Row>
    </>
  );
};

export default UpdateData1;

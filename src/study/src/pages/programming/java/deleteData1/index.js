import { Col, Image, Row } from "antd";
import React from "react";
import Code from "../../../../components/modules/code";
import { DeleteData1Data } from "./data";

const DeleteData1 = () => {
  return (
    <>
      <h1>Delete dữ liệu</h1>
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
          <Code code={DeleteData1Data.pom} language="xml" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>3. application.properties</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={DeleteData1Data.application} language="xml" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>4. data.sql</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={DeleteData1Data.data} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>5. Book.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={DeleteData1Data.book} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>6. Author.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={DeleteData1Data.author} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>7. BookDao.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={DeleteData1Data.bookDao} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>8. BookDaoImpl.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={DeleteData1Data.bookDaoImpl} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>9. BookService.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={DeleteData1Data.bookService} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>10. BookServiceImpl.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={DeleteData1Data.bookServiceImpl} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>11. BookController.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={DeleteData1Data.bookController} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>12. SpringwebappApplication.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={DeleteData1Data.springwebappApplication} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>13. Kết quả khi chạy chương trình</b>
          
        </Col>
        <Col span={23} offset={1}>
          <i>Dữ liệu H2 database trước khi delete</i>
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
          <i>http://localhost:9090/deletebook</i>
        </Col>
        <Col span={22} offset={2}>
          <Image src={require("../../../../resources/img/programming/java/19.jpg")} />
        </Col>

        <Col span={23} offset={1}>
          <i>Dữ liệu H2 database sau khi delete</i>
        </Col>
        <Col span={22} offset={2}>
          <Image src={require("../../../../resources/img/programming/java/20.jpg")} />
        </Col>
      </Row>
    </>
  );
};

export default DeleteData1;

import { Col, Image, Row } from "antd";
import React from "react";
import Code from "../../../../components/modules/code";
import { SelectData2Data } from "./data";

const SelectData2 = () => {
  return (
    <>
      <h1>Select dữ liệu</h1>
      <Row justify="start">
        <Col span={24}>
          <b>1. Cấu trúc project</b>
        </Col>
        <Col span={23} offset={1}>
          <Image src={require("../../../../resources/img/programming/java/21.jpg")} />
          <br />
          <br />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>2. pom.xml</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={SelectData2Data.pom} language="xml" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>3. application.properties</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={SelectData2Data.application} language="xml" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>4. data.sql</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={SelectData2Data.data} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>5. Book.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={SelectData2Data.book} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>6. ApiResponse.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={SelectData2Data.apiResponse} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>7. BookDto.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={SelectData2Data.bookDto} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>8. IBookRepository.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={SelectData2Data.iBookRepository} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>9. BookService.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={SelectData2Data.bookService} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>10. BookController.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={SelectData2Data.bookController} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>11. ConnectH2DatabaseApplication.java</b>
        </Col>
        <Col span={23} offset={1}>
          <Code code={SelectData2Data.connectH2DatabaseApplication} language="java" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <b>12. Kết quả khi chạy chương trình</b>
          
        </Col>
        <Col span={23} offset={1}>
          <i>H2 database console</i>
        </Col>
        <Col span={22} offset={2}>
          <Image src={require("../../../../resources/img/programming/java/22.jpg")} />
            <br />
            <br />
          <Image src={require("../../../../resources/img/programming/java/23.jpg")} />
            <br />
            <br />
        </Col>

        <Col span={23} offset={1}>
          <i>http://localhost:9090/api/v1/user/book/getAll</i>
        </Col>
        <Col span={22} offset={2}>
          <Image src={require("../../../../resources/img/programming/java/24.jpg")} />
        </Col>
      </Row>
    </>
  );
};

export default SelectData2;

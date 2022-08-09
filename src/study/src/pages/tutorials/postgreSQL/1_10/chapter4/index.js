import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { PostgreSQLChapter4Data } from "./data";

const PostgreSQLChapter4 = () => {
  return (
    <>
      <Divider orientation="left">4. SELECT</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <p>In this topic we will base on this table of users :</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter4Data.one} language="sql" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <b>Syntax</b>
        </Col>
        <Col span={23} offset={1}>
          <p>Select every thing:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter4Data.two} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>Select some fields :</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter4Data.three} language="sql" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <b>Examples</b>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter4Data.four} language="sql" />
        </Col>
      </Row>
    </>
  );
};

export default PostgreSQLChapter4;

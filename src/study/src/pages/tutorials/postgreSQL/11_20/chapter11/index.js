import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import MasterLayout from "../../../../../themes/masterLayout";
import { PostgreSQLChapter11Data } from "./data";

const PostgreSQLChapter11 = () => {
  return (
    <MasterLayout>
      <Divider orientation="left">11. Common Table Expressions (WITH)</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1. Common Table Expressions in SELECT Queries</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            Common table expressions support extracting portions of larger
            queries. For example:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter11Data.one} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>2. Traversing tree using WITH RECURSIVE</h1>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter11Data.two} language="sql" />
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default PostgreSQLChapter11;

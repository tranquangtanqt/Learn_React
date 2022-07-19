import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import MasterLayout from "../../../../../themes/masterLayout";
import { PostgreSQLChapter5Data } from "./data";

const PostgreSQLChapter5 = () => {
  return (
    <MasterLayout>
      <Divider orientation="left">5. Find String Length/Character Length</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <b>
            To get length of "character varying", "text" fields, Use
            char_length() or character_length().
          </b>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={23} offset={1}>
          <p>Example 1, Query:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter5Data.one} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <b>Example 2, Query:</b>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter5Data.two} language="sql" />
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default PostgreSQLChapter5;

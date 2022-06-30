import { Col, Row, Divider } from "antd";
import Code from "../../../../components/modules/code";
import MasterLayout from "../../../../themes/masterLayout";
import { PostgreSQLChapter2Data } from "./data";

const PostgreSQLChapter2 = () => {
  return (
    <MasterLayout>
      <Divider orientation="left"> Dates, Timestamps, and Intervals</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1.6 : Arrays</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            In PostgreSQL you can create Arrays of any built-in, user-defined or
            enum type. In default there is no limit to an Array, but you can
            specify it.
          </p>
          <b>Declaring an Array</b>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter2Data.one} language="sql" />
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default PostgreSQLChapter2;

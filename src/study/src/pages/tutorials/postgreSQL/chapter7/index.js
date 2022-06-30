import { Col, Row, Divider } from "antd";
import Code from "../../../../components/modules/code";
import MasterLayout from "../../../../themes/masterLayout";
import { PostgreSQLChapter7Data } from "./data";

const PostgreSQLChapter7 = () => {
  return (
    <MasterLayout>
      <Divider orientation="left"> 7. INSERT</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1.1 Insert data using COPY</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            COPY is PostgreSQL's bulk-insert mechanism. It's a convenient way to
            transfer data between files and tables, but it's also far faster
            than INSERT when adding more than a few thousand rows at a time.
          </p>
          <p>Let's begin by creating sample data file</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.one} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>And we need a two column table into which this data can be imported into.</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.two} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>Now the actual copy operation, this will create six records in the table.</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.three} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>Instead of using a file on disk, can insert data from STDIN</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.four} language="sql" />
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.five} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>Also you can copy data from a table to file as below:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter7Data.six} language="sql" />
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default PostgreSQLChapter7;

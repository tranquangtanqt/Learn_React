import { Col, Row, Divider } from "antd";
import Code from "../../../../components/modules/code";
import MasterLayout from "../../../../themes/masterLayout";
import { PostgreSQLChapter3Data } from "./data";

const PostgreSQLChapter3 = () => {
  return (
    <MasterLayout>
      <Divider orientation="left">3. Table Creation</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1.1 Show table definition</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            Open the psql command line tool connected to the database where your
            table is. Then type the following command:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter3Data.one} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>To get extended information type</p>
        </Col>
        <Col span={23} offset={2}>
          <Code code={PostgreSQLChapter3Data.two} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            If you have forgotten the name of the table, just type \d into psql
            to obtain a list of tables and views in the current database.
          </p>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1.2 Create table from select</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>Let's say you have a table called person:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter3Data.three} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>You can create a new table of people over 30 like this:</p>
        </Col>

        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter3Data.four} language="sql" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1.3 Create unlogged table</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            You can create unlogged tables so that you can make the tables
            considerably faster. Unlogged table skips writing WRITE-ahead log
            which means it's not crash-safe and unable to replicate.
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter3Data.five} language="sql" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1.4 Table creation with Primary Key</h1>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter3Data.six} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            Alternatively, you can place the PRIMARY KEY constraint directly in
            the column definition:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter3Data.seven} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            It is recommended that you use lower case names for the table and as
            well as all the columns. If you use upper case names such as Person
            you would have to wrap that name in double quotes ("Person") in each
            and every query because PostgreSQL enforces case folding.
          </p>
        </Col>

        <Row justify="start" className="m-t-20">
          <Col span={24}>
            <h1>1.5 Create a table that references other table</h1>
          </Col>
          <Col span={23} offset={1}>
            <p>
              In this example, User Table will have a column that references the
              Agency table.
            </p>
          </Col>
          <Col span={22} offset={2}>
            <Code code={PostgreSQLChapter3Data.eight} language="sql" />
          </Col>
        </Row>
      </Row>
    </MasterLayout>
  );
};

export default PostgreSQLChapter3;

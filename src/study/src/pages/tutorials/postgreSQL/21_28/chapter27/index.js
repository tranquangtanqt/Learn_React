import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import MasterLayout from "../../../../../themes/masterLayout";
import { PostgreSQLChapter27Data } from "./data";

const PostgreSQLChapter27 = () => {
  return (
    <MasterLayout>
      <Divider orientation="left">
        27. EXTENSION dblink and postgres_fdw
      </Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1. Extention FDW</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            FDW is an implimentation of dblink it is more helpful, so to use it:
          </p>
          <p>1. Create an extention:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter27Data.one} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>2. Create SERVER:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter27Data.two} language="sql" />
        </Col>
        
        <Col span={23} offset={1}>
          <p>3. Create user mapping for postgres server</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter27Data.two} language="sql" />
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default PostgreSQLChapter27;

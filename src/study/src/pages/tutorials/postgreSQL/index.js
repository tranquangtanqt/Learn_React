import { Col, Row, Card } from "antd";
import MasterLayout from "../../../themes/masterLayout";
import { Link } from "react-router-dom";

const PostgreSQL = () => {
  return (
    <MasterLayout>
      <Row justify="start">
        <Col span={8}>
          <Card title="Chapter 1 - 5">
            <Link to={"/tutorial/postgreSQL/chapter1"}>
              <div>{"1. Data Types"}</div>
              <div className="m-l-20">{"1.1 Numeric Types"}</div>
              <div className="m-l-20">{"1.2 Date/ Time Types"}</div>
              <div className="m-l-20">{"1.3 Geometric Types"}</div>
              <div className="m-l-20">{"1.4 Network Adress Types"}</div>
              <div className="m-l-20">{"1.5 Character Types"}</div>
              <div className="m-l-20">{"1.6 Arrays"}</div>
            </Link>
            <br />
            <Link to={"/tutorial/postgreSQL/chapter2"}>
              <div>{"2. Dates, Timestamps, and Intervals"}</div>
              <div className="m-l-20">{"2.1 SELECT the last day of month"}</div>
              <div className="m-l-20">
                {"2.2 Cast a timestamp or interval to a string"}
              </div>
              <div className="m-l-20">
                {"2.3 Count the number of records per week"}
              </div>
            </Link>
            <br />
            <Link to={"/tutorial/postgreSQL/chapter3"}>
              <div>{"3. Table Creation"}</div>
              <div className="m-l-20">{"3.1 Show table definition"}</div>
              <div className="m-l-20">{"3.2 Create table from select"}</div>
              <div className="m-l-20">{"3.3 Create unlogged table"}</div>
              <div className="m-l-20">
                {"3.4 Table creation with Primary Key"}
              </div>
              <div className="m-l-20">
                {"3.5 Create a table that references other table"}
              </div>
            </Link>
            <br />
            <Link to={"/tutorial/postgreSQL/chapter4"}>
              <div>{"4. SELECT"}</div>
            </Link>
            <br />
            <Link to={"/tutorial/postgreSQL/chapter5"}>
              <div>{"5. Find String Length/Character Length "}</div>
            </Link>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Chapter 6 - 10">
            <Link to={"/tutorial/postgreSQL/chapter6"}>
              <div>{"6. COALESCE"}</div>
              <div className="m-l-20">{"6.1 Single non null argument"}</div>
              <div className="m-l-20">{"6.2 Multiple non null arguments"}</div>
              <div className="m-l-20">{"6.3 All null arguments"}</div>
            </Link>
            <br />
            <Link to={"/tutorial/postgreSQL/chapter7"}>
              <div>{"7. INSERT"}</div>
              <div className="m-l-20">{"7.1 Insert data using COPY"}</div>
              <div className="m-l-20">{"7.2 Inserting multiple rows"}</div>
              <div className="m-l-20">{"7.3 INSERT data and RETURING values"}</div>
              <div className="m-l-20">{"7.4 Basic INSERT"}</div>
              <div className="m-l-20">{"7.5 Insert from select"}</div>
              <div className="m-l-20">{"7.6 UPSERT - INSERT ... ON CONFLICT DO UPDATE.."}</div>
              <div className="m-l-20">{"7.7 SELECT data into file"}</div>
            </Link>
            <br />
            <Link to={"/tutorial/postgreSQL/chapter8"}>
              <div>{"8. UPDATE"}</div>
              <div className="m-l-20">{"7.1 Insert data using COPY"}</div>
              <div className="m-l-20">{"7.2 Inserting multiple rows"}</div>
              <div className="m-l-20">{"7.3 INSERT data and RETURING values"}</div>
              <div className="m-l-20">{"7.4 Basic INSERT"}</div>
              <div className="m-l-20">{"7.5 Insert from select"}</div>
              <div className="m-l-20">{"7.6 UPSERT - INSERT ... ON CONFLICT DO UPDATE.."}</div>
              <div className="m-l-20">{"7.7 SELECT data into file"}</div>
            </Link>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Chapter 11 - 15"></Card>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default PostgreSQL;

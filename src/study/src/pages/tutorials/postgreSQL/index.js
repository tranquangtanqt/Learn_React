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
              <div className="m-l-20">{"8.1 Updating a table based on joining another table"}</div>
              <div className="m-l-20">{"8.2 Update all rows in a table"}</div>
              <div className="m-l-20">{"8.3 Update all rows meeting a condition"}</div>
              <div className="m-l-20">{"8.4 Updating multiple columns in table"}</div>
            </Link>
            <br />
            <Link to={"/tutorial/postgreSQL/chapter9"}>
              <div>{"9. JSON Support"}</div>
              <div className="m-l-20">{"9.1 Using JSONb operators"}</div>
              <div className="m-l-20">{"9.2 Querying complex JSON documentse"}</div>
              <div className="m-l-20">{"9.3 Creating a pure JSON table"}</div>
            </Link>
            <br />
            <Link to={"/tutorial/postgreSQL/chapter10"}>
              <div>{"10. Aggregate Functions"}</div>
              <div className="m-l-20">{"10.1 Simple statistics: min(), max(), avg()"}</div>
              <div className="m-l-20">{"10.2 regr_slope(Y, X)"}</div>
              <div className="m-l-20">{"10.3 string_agg(expression, delimiter)"}</div>
            </Link>

          </Card>
        </Col>

        <Col span={8}>
          <Card title="Chapter 11 - 15">
            <Link to={"/tutorial/postgreSQL/chapter11"}>
              <div>{"11. Common Table Expressions (WITH)"}</div>
              <div className="m-l-20">{"11.1 Common Table Expressions in SELECT Queries"}</div>
              <div className="m-l-20">{"11.2 Traversing tree using WITH RECURSIVE"}</div>
            </Link>
            <br />
            <Link to={"/tutorial/postgreSQL/chapter12"}>
              <div>{"12. Window Functions"}</div>
              <div className="m-l-20">{"12.1 Generic example"}</div>
              <div className="m-l-20">{"12.2 Column values vs dense_rank vs rank vs row_number"}</div>
            </Link>
            <br />
            <Link to={"/tutorial/postgreSQL/chapter13"}>
              <div>{"13. Recursive queries"}</div>
              <div className="m-l-20">{"13.1 Sum of Integers"}</div>
            </Link>
            <br />
            <Link to={"/tutorial/postgreSQL/chapter14"}>
              <div>{"14. Programming with PL/pgSQL"}</div>
              <div className="m-l-20">{"14.1 Basic PL/pgSQL Function"}</div>
              <div className="m-l-20">{"14.2 Custom exceptions"}</div>
              <div className="m-l-20">{"14.3 PL/pgSQL Syntax"}</div>
              <div className="m-l-20">{"14.3 RETURNS Block"}</div>
            </Link>
          </Card>
        </Col>
      </Row>
      <hr />
    </MasterLayout>
  );
};

export default PostgreSQL;

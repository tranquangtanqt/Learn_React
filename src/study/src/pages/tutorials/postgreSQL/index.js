import { Col, Row, Card } from "antd";
import MasterLayout from "../../../themes/masterLayout";
import { Link } from "react-router-dom";

const PostgreSQL = () => {
  return (
    <MasterLayout>
      <Row justify="start">
        <Col span={8}>
          <Card title="PostgreSQL">
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
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Creating the Angular application">
            <Link to={"/tutorial/postgreSQL/chapter6"}>
              {"6. Creating the Angular application"}
            </Link>
            <br />
            <Link to={"/tutorial/postgreSQL/chapter7"}>
              {"7. Making HTTP requests in Angular"}
            </Link>
            <br />
            <Link to={"/tutorial/postgreSQL/chapter8"}>
              {"8. Adding CORS support in the API"}
            </Link>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Authentication basics">
            <Link to={"/tutorial/postgreSQL/chapter9"}>
              {"9. Updating the user entity and Creating a base API controller"}
            </Link>
            <br />
            <Link to={"/tutorial/postgreSQL/chapter7"}>
              {"7. Making HTTP requests in Angular"}
            </Link>
            <br />
            <Link to={"/tutorial/postgreSQL/chapter8"}>
              {"8. Adding CORS support in the API"}
            </Link>
          </Card>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default PostgreSQL;

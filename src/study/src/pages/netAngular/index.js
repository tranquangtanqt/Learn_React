import { Col, Row, Card } from "antd";
import MasterLayout from "../../themes/masterLayout";
import { Link } from "react-router-dom";

const NetAngular = () => {
  return (
    <MasterLayout>
      <Row justify="start">
        <Col span={8}>
          <Card title="Creating the .Net API Project">
            <Link to={"/tutorial/net-angular/lesson1"}>
              {"1. Building a walking skeleton API"}
            </Link>
            <br />
            <Link to={"/tutorial/net-angular/lesson2"}>
              {"2. Introduction to Entity Framework"}
            </Link>
            <br />
            <Link to={"/tutorial/net-angular/lesson3"}>
              {"3. Adding Entity Framework"}
            </Link>
            <br />
            <Link to={"/tutorial/net-angular/lesson4"}>
              {"4. Setting donet-ef"}
            </Link>
          </Card>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default NetAngular;

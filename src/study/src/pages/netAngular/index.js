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
            <br />
            <Link to={"/tutorial/net-angular/lesson5"}>
              {"5. Adding a new API Controller"}
            </Link>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Creating the Angular application">
            <Link to={"/tutorial/net-angular/lesson6"}>
              {"6. Creating the Angular application"}
            </Link>
             <br />
            <Link to={"/tutorial/net-angular/lesson7"}>
              {"7. Making HTTP requests in Angular"}
            </Link>
            <br />
            <Link to={"/tutorial/net-angular/lesson8"}>
              {"8. Adding CORS support in the API"}
            </Link>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Authentication basics">
            <Link to={"/tutorial/net-angular/lesson9"}>
              {"9. Updating the user entity and Creating a base API controller"}
            </Link>
             <br />
            <Link to={"/tutorial/net-angular/lesson7"}>
              {"7. Making HTTP requests in Angular"}
            </Link>
            <br />
            <Link to={"/tutorial/net-angular/lesson8"}>
              {"8. Adding CORS support in the API"}
            </Link>
          </Card>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default NetAngular;

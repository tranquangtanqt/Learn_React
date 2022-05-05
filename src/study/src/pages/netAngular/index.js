import { Col, Row, Card } from "antd";
import MasterLayout from "../../themes/masterLayout";
import { Link } from "react-router-dom";

const NetAngular = () => {
  return (
    <MasterLayout>
      <Row justify="start">
        <Col span={6}>
          <Card title="Creating the .Net API Project">
            <Link to={"/tutorial/net-angular/lesson1"}>
              {"Creating the .Net API Project using the dotnet CLI"}
            </Link>
          </Card>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default NetAngular;

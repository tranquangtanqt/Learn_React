import { Col, Row, Card } from "antd";
import MasterLayout from "../../themes/masterLayout";
import { Link } from "react-router-dom";

const Tips = () => {
  return (
    <MasterLayout>
      <Row justify="start">
        <Col span={8}>
          <Card title="Software">
            <Link to={"/tips/software/visualStudioCode"}>
              {"1. Visual Studio Code"}
            </Link>
          </Card>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default Tips;

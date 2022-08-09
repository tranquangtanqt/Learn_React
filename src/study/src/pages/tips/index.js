import { Col, Row, Card } from "antd";
import { Link } from "react-router-dom";

const Tips = () => {
  return (
    <>
      <Row justify="start">
        <Col span={8}>
          <Card title="Software">
            <Link to={"/tips/software/visualStudioCode"}>
              {"1. Visual Studio Code"}
            </Link>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Tips;

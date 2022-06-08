import { Col, Row, Card } from "antd";

import { Link } from "react-router-dom";
import MasterLayout from "../../../themes/masterLayout";

const ExcelTutorial = () => {
  return (
    <MasterLayout>
      <Row justify="start">
        <Col span={8}>
          <Card title="Sort and Filter">
            <Link to={"/tutorial/excel/filter1"}>
              {"1. Filter 1"}
            </Link>
            <br />
          </Card>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default ExcelTutorial;

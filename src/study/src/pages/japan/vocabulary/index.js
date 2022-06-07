import { Col, Row, Card } from "antd";
import MasterLayout from "../../../themes/masterLayout";
import { Link } from "react-router-dom";

const Vocabulary = () => {
  return (
    <MasterLayout>
      <Row justify="start">
        <Col span={8}>
          <Card title="Vocabulary">
            <Link to={"/japan/vocabulary/unit1"}>
              {"1. Unit 1"}
            </Link>
            <br />
            <Link to={"/japan/vocabulary/unit2"}>
              {"2. Unit 2"}
            </Link>
            <br />
            <Link to={"/japan/vocabulary/unitesson3"}>
              {"3. Unit 3"}
            </Link>
            <br />
            <Link to={"/japan/vocabulary/unit4"}>
              {"4. Unit 4"}
            </Link>
            <br />
            <Link to={"/japan/vocabulary/unit5"}>
              {"5. Unit 5"}
            </Link>
          </Card>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default Vocabulary;

import { Col, Row, Card } from "antd";
import MasterLayout from "../../themes/masterLayout";
import { Link } from "react-router-dom";

const Utilities = () => {
  return (
    <MasterLayout>
      <Row justify="start">
        <Col span={8}>
          <Card title="File">
            <Link to={"/utilities/listFileSelected"}>
              {"1. List file selected"}
            </Link>
            <br />
            <Link to={"/utilities/readContentMultiFile"}>
              {"2. Read content multi file"}
            </Link>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Text">
            <Link to={"/utilities/textCommon"}>{"1. Common"}</Link>
            <br />
            <Link to={"/utilities/findTextDuplicates"}>{"2. Find Text Duplicates"}</Link>
            <br />
            <Link to={"/utilities/textRepeat"}>{"3. Repeat"}</Link>
            <br />
            <Link to={"/utilities/textReplace"}>{"4. Replace"}</Link>
            <br />
            <Link to={"/utilities/tinyMCE"}>{"4. Tiny MCE"}</Link>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="SQL">
            <Link to={"/utilities/randomInsertSQL"}>
              {"1. Random Insert SQL"}
            </Link>
            <br />
            <Link to={"/utilities/createTableFromExcel"}>
              {"2. Create Table From Excel"}
            </Link>
          </Card>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default Utilities;

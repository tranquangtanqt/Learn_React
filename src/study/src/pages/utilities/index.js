import { Col, Row, Card } from "antd";
import { Link } from "react-router-dom";

const Utilities = () => {
  return (
    <>
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
            <Link to={"/utilities/findTextColumnJP_EN"}>{"3. Find Text ColumnJP_EN"}</Link>
            <br />
            <Link to={"/utilities/textRepeat"}>{"4. Repeat"}</Link>
            <br />
            <Link to={"/utilities/textReplace"}>{"5. Replace"}</Link>
            <br />
            <Link to={"/utilities/tinyMCE"}>{"6. Special"}</Link>
            <br />
            <Link to={"/utilities/tinyMCE"}>{"7. Tiny MCE"}</Link>
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
    </>
  );
};

export default Utilities;

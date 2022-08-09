import { Col, Image, Row } from "antd";

const ExcelFilter1 = () => {
  return (
    <>
      <h1>Filter</h1>
      <Row>
        <Col span={24}>
          <h1>1. Chọn vùng văn bản và nhấn tổ hợp phím CTRT + T</h1>
        </Col>
        <Col span={23} offset={1}>
          <Image
            src={require("../../../../resources/img/tutorials/excel/excel_1.png")}
          />
          <br />
          <br />
          <Image
            src={require("../../../../resources/img/tutorials/excel/excel_2.png")}
          />
          <br />
          <br />
          <Image
            src={require("../../../../resources/img/tutorials/excel/excel_3.png")}
          />
          <br />
          <br />
          <Image
            src={require("../../../../resources/img/tutorials/excel/excel_4.png")}
          />
          <br />
          <br />
          <Image
            src={require("../../../../resources/img/tutorials/excel/excel_5.png")}
          />
        </Col>
      </Row>
    </>
  );
};

export default ExcelFilter1;

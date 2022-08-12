import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { JavaTutorialChapter1Data } from "./data";

const JavaTutorialChapter1 = () => {
  return (
    <>
      <Divider orientation="left"></Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1. Numeric primitive casting</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            Numeric primitives can be cast in two ways. Implicit casting happens when the source type has smaller range
            than the target type.
          </p>
          <b></b>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter1Data.one} language="sql" />
        </Col>
      </Row>
    </>
  );
};

export default JavaTutorialChapter1;

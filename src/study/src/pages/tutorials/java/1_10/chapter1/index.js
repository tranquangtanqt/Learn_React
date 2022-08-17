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
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter1Data.one} language="java" />
        </Col>

        <Col span={23} offset={1}>
          <p>Explicit casting has to be done when the source type has larger range than the target type.</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter1Data.two} language="java" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            When casting floating point primitives (float, double) to whole number primitives, the number is rounded
            down.
          </p>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>2. Basic Numeric Promotion</h1>
        </Col>

        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter1Data.three} language="java" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>3. Non-numeric primitive casting</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>The boolean type cannot be cast to/from any other primitive type.</p>
          <p>
            A char can be cast to/from any numeric type by using the code-point mappings specified by Unicode. A char is
            represented in memory as an unsigned 16-bit integer value (2 bytes), so casting to byte (1 byte) will drop 8
            of those bits (this is safe for ASCII characters). The utility methods of the Character class use int (4
            bytes) to transfer to/from code-point values, but a short (2 bytes) would also suffice for storing a Unicode
            code-point.
          </p>
        </Col>

        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter1Data.four} language="java" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>4. Object casting</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>As with primitives, objects can be cast both explicitly and implicitly.</p>
          <p>
            Implicit casting happens when the source type extends or implements the target type (casting to a superclass
            or interface).
          </p>
          <p>
            Explicit casting has to be done when the source type is extended or implemented by the target type (casting
            to a subtype). This can produce a runtime exception (ClassCastException) when the object being cast is not
            of the target type (or the target's subtype).
          </p>
        </Col>

        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter1Data.five} language="java" />
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>5. Testing if an object can be cast using instanceof</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            Java provides the instanceof operator to test if an object is of a certain type, or a subclass of that type.
            The program can then choose to cast or not cast that object accordingly.
          </p>
        </Col>

        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter1Data.six} language="java" />
        </Col>
      </Row>
    </>
  );
};

export default JavaTutorialChapter1;

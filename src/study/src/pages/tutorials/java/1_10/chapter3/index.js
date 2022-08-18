import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { JavaTutorialChapter3Data } from "./data";

const JavaTutorialChapter3 = () => {
  return (
    <>
      <Divider orientation="left">3. Reference Data Types</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1. Dereferencing</h1>
        </Col>

        <Col span={23} offset={1}>
          <p>Dereferencing happens with the . operator:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter3Data.one} language="java" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            Dereferencing follows the memory address stored in a reference, to the place in memory where the actual
            object resides. When an object has been found, the requested method is called (toString in this case).
          </p>
          <p>When a reference has the value null, dereferencing results in a NullPointerException:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter3Data.two} language="java" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            null indicates the absence of a value, i.e. following the memory address leads nowhere. So there is no
            object on which the requested method can be called.
          </p>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>2. Instantiating a reference type</h1>
        </Col>

        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter3Data.three} language="java" />
        </Col>

        <Col span={23} offset={1}>
          <p>Where:</p>
          <ul>
            <li>Object is a reference type.</li>
            <li>obj is the variable in which to store the new reference.</li>
            <li>Object() is the call to a constructor of Object.</li>
          </ul>
          <p>What happens:</p>
          <ul>
            <li>Space in memory is allocated for the object.</li>
            <li>The constructor Object() is called to initialize that memory space.</li>
            <li>The memory address is stored in obj, so that it references the newly created object.</li>
          </ul>
          <p>This is different from primitives:</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapter3Data.four} language="java" />
        </Col>

        <Col span={23} offset={1}>
          <p>Where the actual value 10 is stored in i.</p>
        </Col>
      </Row>
    </>
  );
};

export default JavaTutorialChapter3;

import { Col, Divider, Row } from "antd";
import Code from "../../../components/modules/code";

const VisualStudioCode_Extention = () => {
  const prettier = `//setting.json
"prettier.printWidth": 120`;

  return (
    <>
      <Divider orientation="left">Extention</Divider>
      <Row justify="start">
        <Col span={24}>
          <h1>1. Extention - Tip</h1>
        </Col>
        <Col span={23} offset={1}>
          <ul>
            <li>Auto Import</li>
            <li>Git history</li>
            <li>Git lens</li>
            <li>Live server</li>
            <li>One Monokai themes</li>
            <li>Prettier</li>
            <li>Auto Close Tag</li>
            <li>Bookmarks</li>
            <li>Javascript (ES6) </li>
          </ul>
        </Col>

        <Col span={24}>
          <h1>2. Setting max character for Prettier</h1>
        </Col>
        <Col span={23} offset={1}>
          <Code code={prettier} language="typescript" />
        </Col>
      </Row>
    </>
  );
};

export default VisualStudioCode_Extention;

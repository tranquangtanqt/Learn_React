import { Col, Divider, Image, Row } from "antd";
import Code from "../../../components/modules/code";

const VisualStudioCode_AddHotkey = () => {
  const keyBingding = `// Place your key bindings in this file to override the defaults
[
    {
        "key": "ctrl+shift+l",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
          "snippet": "console.log(\${TM_SELECTED_TEXT}$1)$2;"
        }
    }
]`;

  return (
    <>
      <Divider orientation="left">Add hotkey</Divider>
      <Row justify="start">
        <Col span={24}>
          <h1>1.</h1>
        </Col>
        <Col span={23} offset={1}>
          <Image src={require("../../../resources/img/tips/soffware_1.jpg")} />
          <br />
          <br />
        </Col>
        <Col span={24}>
          <h1>2.</h1>
        </Col>
        <Col span={23} offset={1}>
          <Image src={require("../../../resources/img/tips/soffware_2.jpg")} />
          <br />
          <br />
        </Col>

        <Col span={24}>
          <h1>3. Source</h1>
        </Col>
        <Col span={23} offset={1}>
          <Code code={keyBingding} language="typescript" />
        </Col>
      </Row>
    </>
  );
};

export default VisualStudioCode_AddHotkey;

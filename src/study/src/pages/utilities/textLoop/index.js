import { Button, Col, Divider, Input, Row } from "antd";
import { useState } from "react";
import MasterLayout from "../../../themes/masterLayout";

const TextLoop = () => {
  const [input, setInput] = useState("###name###");
  const [output, setOutput] = useState("");
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const renderText = () => {
    let outputStr = "";
    if (isNaN(start)) {
      let startNumber = start.charCodeAt(0);
      let endNumber = end.charCodeAt(0);
      for (let i = startNumber; i <= endNumber; i++) {
        let str = replaceAll(input, "###name###", String.fromCharCode(i));

        outputStr += str;
        outputStr += "\r\n";
      }
    } else {
      // number
      for (let i = parseInt(start); i <= parseInt(end); i++) {
        let str = replaceAll(input, "###name###", i);
        outputStr += str;
        outputStr += "\r\n";
      }
    }

    setOutput(outputStr);
  };

  const replaceAll = (string, search, replace) => {
    return string.split(search).join(replace);
  };

  return (
    <MasterLayout>
      <form>
        <Divider orientation="left">Input</Divider>
        <Row justify="start">
          <Col span={24}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ height: 200, width: "100%" }}
            />
          </Col>
        </Row>

        <Divider orientation="left">Start</Divider>
        <Input
          placeholder="Start"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />

        <Divider orientation="left">End</Divider>
        <Input
          placeholder="End"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />

        <Divider orientation="left">
          <Button type="primary" onClick={renderText}>
            Render text
          </Button>
        </Divider>

        <Row justify="start">
          <Col span={24}>
            <textarea
              value={output}
              onChange={(e) => setOutput(e.target.value)}
              style={{ height: 200, width: "100%" }}
            />
          </Col>
        </Row>
      </form>
    </MasterLayout>
  );
};

export default TextLoop;

import { Button, Col, Divider, Row } from "antd";
import { useState } from "react";

const FindTextDuplicates = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [output, setOutput] = useState("");

  const findText = () => {
    let outputStr = "";
    let input1Arr = input1.split("\n");
    input1Arr = input1Arr.map((x) => x.trim());
    let input2Arr = input2.split("\n");
    input2Arr = input2Arr.map((x) => x.trim());

    
    for (let i = 0; i < input1Arr.length; i++) {
      if (input2Arr.includes(input1Arr[i])) {
        outputStr += input1Arr[i] + "\n";
      }
    }

    setOutput(outputStr);
  };

  return (
    <>
      <Divider orientation="left">Find Text Duplicates</Divider>
      <Row justify="start">
        <Col span={12}>
          <textarea
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            style={{ height: 400, width: "100%" }}
          />
        </Col>

        <Col span={12}>
          <textarea
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            style={{ height: 400, width: "100%" }}
          />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={18}>
          <Divider orientation="left">
            <Button type="primary" onClick={() => findText()}>
              Find
            </Button>
          </Divider>
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <textarea
            value={output}
            onChange={(e) => setOutput(e.target.value)}
            style={{ height: 400, width: "100%" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default FindTextDuplicates;

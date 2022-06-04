import { Button, Col, Divider, notification, Row } from "antd";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Code from "../../../components/modules/code";
import MasterLayout from "../../../themes/masterLayout";
import { readContentMultiFileData } from "./data";

const ReadContentMultiFile = () => {
  const [files, setFiles] = useState([]);
  const [output, setOutput] = useState("");

  const getData = () => {
    let readers = [];
    let content = "";
    // Abort if there were no files selected
    if (!files.length) return;

    // Store promises in array
    for (let i = 0; i < files.length; i++) {
      readers.push(readFileAsText(files[i]));
    }

    // Trigger Promises
    Promise.all(readers).then((values) => {
      for (let i = 0; i < values.length; i++) {
        content += values[i];
        content += "\n";
      }

      setOutput(content);
    });
  };

  /**
   *  Simple JavaScript Promise that reads a file as text.
   **/
  const readFileAsText = (file) => {
    return new Promise(function (resolve, reject) {
      let fr = new FileReader();

      fr.onload = function () {
        resolve(fr.result);
      };

      fr.onerror = function () {
        reject(fr);
      };

      fr.readAsText(file);
    });
  };

  const openNotification = () => {
    notification.open({
      message: "",
      description: "Copied",
    });
  };

  return (
    <MasterLayout>
      <Divider orientation="left">
        Select multiple files to read from your system:
      </Divider>
      <Row justify="start">
        <Col span={24}>
          <input
            type="file"
            id="file"
            multiple
            name="file"
            onChange={(e) => setFiles(e.target.files)}
          />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={18}>
          <Divider orientation="left">
            <Button type="primary" onClick={getData}>
              Get content of file
            </Button>
          </Divider>
        </Col>

        <Col span={6}>
          <CopyToClipboard
            text={output}
            onCopy={() => {
              openNotification();
            }}
          >
            <Button type="success" style={{ background: "#fffb8f" }}>
              Copy to clipboard
            </Button>
          </CopyToClipboard>
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

      <Divider orientation="left">Source code</Divider>

      <Row justify="start">
        <Col span={24}>
          <p>- index.html</p>
          <Code code={readContentMultiFileData.index} language="html" />
          <p>- script.js</p>
          <Code code={readContentMultiFileData.script} language="javascript" />
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default ReadContentMultiFile;

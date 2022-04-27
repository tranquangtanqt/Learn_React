
import { Col, Row } from "antd";
import { useState } from "react";
import Code from "../../../components/modules/code";
import MasterLayout from "../../../themes/masterLayout";

const code = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>get-files</title>
</head>
<body>
<input type="file" name="client-file" id="get-files" multiple onchange="change()"/>
<script>
  function change(){
    var inp = document.getElementById("get-files");
    for (i = 0; i < inp.files.length; i++) {
        let file = inp.files[i];
        console.log(file.name);
    }
  }
</script>
</body>
</html>
  `;

const ListFileSelected = () => {

    const [output, setOutput] = useState("");

    const handleupload = (e) => {
        let files = e.target.files;
        let fileName = "";
        for (let index = 0; index < files.length; index++) {
            fileName += files[index].name;
            fileName += "\r\n";
        }

        setOutput(fileName);
    };

    return (
        <MasterLayout>
            <Row justify="start">
                <Col span={24}>
                    <input type="file" id="file" onChange = { e => handleupload(e) }  multiple />
                </Col>
            </Row>

            <Row justify="start">
                <Col span={24}>
                    <textarea
                    value={output}
                    onChange={(e) => setOutput(e.target.value)}
                    style={{ height: 200, width: "100%" }}
                    />
                </Col>
            </Row>

            <Row justify="start">
                <Col span={24}>
                    <Code code={code} language={"HTML"}></Code>
                </Col>
            </Row>
        </MasterLayout>
    )
}

export default ListFileSelected;
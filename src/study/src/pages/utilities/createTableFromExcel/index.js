import { Button, Col, Divider, Row } from "antd";
import { useState } from "react";
import MasterLayout from "../../../themes/masterLayout";
import * as XLSX from "xlsx";

const CreateTableFromExcel = () => {

  const [fileInput, setfileInput] = useState([]);
  const [output, setOutput] = useState("");

  const createTable = () => {
    let outputStr = "CREATE TABLE DEMO (\n";

    
    const reader = new FileReader();

     reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_row_object_array(ws, { header: 1 });
      console.log(data);

      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(element[2])
        outputStr += element[1] + " ";
        if(element[2] === "C") {
          if(element[3] === 1){
            outputStr += "CHAR(1) ";
          } else {
            outputStr += "VARCHAR2(" + element[3] + " CHAR) ";
          }
          
        }
        outputStr += "\n";
      }

      outputStr += "\n)"
      setOutput(outputStr);
    };
    
    reader.readAsBinaryString(fileInput[0]);

    
  };

  const onChange = (e) => {
    setfileInput([...fileInput, e.target.files[0]]);
  };

  return (
    <MasterLayout>
      <Divider orientation="left">Create Table From Excel</Divider>
      <Row justify="start">
        <Col span={12}>
          <input type="file" onChange={onChange} />
        </Col>

        <Col span={12}></Col>
      </Row>

      <Row justify="start">
        <Col span={18}>
          <Divider orientation="left">
            <Button type="primary" onClick={() => createTable()}>
              Create
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
    </MasterLayout>
  );
};

export default CreateTableFromExcel;

import { Button, Col, Divider, Input, Row } from "antd";
import { useState } from "react";
import MasterLayout from "../../../themes/masterLayout";
import StringUtils from "../../../utils/StringUtils";

const RandomInsertSQL = () => {
  const [tableName, setTableName] = useState("");
  const [column, setColumn] =
    useState(`"ITM_CD" VARCHAR2(40 CHAR) NOT NULL ENABLE, 
  "ITM_CD1" VARCHAR2(40 CHAR) NOT NULL ENABLE, `);
  const [output, setOutput] = useState("");
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(2);

  const renderText = () => {
    let outputStr = "INSERT INTO " + tableName + " (";

    let columnArr = column.split("\n");

    for (let i = 0; i < columnArr.length; i++) {
      let arr = columnArr[i].trim().split(" ");
      let columnName = StringUtils.replaceAll(arr[0], `"`, "");
      outputStr += columnName + ",";
    }

    // remove "," last
    outputStr = outputStr.slice(0, -1);
    outputStr += ") VALUES \n (";

    if (!isNaN(end)) {
      for (let i = start; i <= end; i++) {
        for (let j = 0; j < columnArr.length; j++) {
          let arr = columnArr[j].trim().split(" ");
          let columnName = StringUtils.replaceAll(arr[0], `"`, "");

          if (columnArr[j]) {
            let start = columnArr[j].indexOf("(");
            let end = columnArr[j].indexOf(")");

            let charEndStr = columnArr[j].substring(start + 1, end);
            let charEnd = charEndStr.match(/\d+/g)[0];

            let value = columnName.substring(0, charEnd);

            let zero = charEnd - value.length;
            value = value + StringUtils.padZero(i, zero);
            outputStr += "'" + value + "',";
          }
        }

        // remove "," last
        outputStr = outputStr.slice(0, -1);
        outputStr += "), \n (";
      }
    }

    setOutput(outputStr.slice(0, -5));
  };

  return (
    <MasterLayout>
      <Divider orientation="left">Table name</Divider>
      <Input
        placeholder="Enter table name"
        value={tableName}
        onChange={(e) => setTableName(e.target.value)}
      />
      

      <Divider orientation="left">Input</Divider>
      <Row justify="start">
        <Col span={24}>
          <textarea
            value={column}
            onChange={(e) => setColumn(e.target.value)}
            style={{ height: 200, width: "100%" }}
            placeholder={"Enter name and type of column"}
          />
        </Col>
      </Row>

      <Divider orientation="left">Start</Divider>
      <Input
        placeholder="Enter start"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />

      <Divider orientation="left">End</Divider>
      <Input
        placeholder="Enter end"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
      />

      <Divider orientation="left">
        <Button type="primary" onClick={renderText}>
          Render Insert SQL
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
    </MasterLayout>
  );
};

export default RandomInsertSQL;

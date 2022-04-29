import { Col, Divider, Input, Row } from "antd";
import { useState } from "react";

const RepeatTextMulti = () => {
  const [input, setInput] = useState("###replace-0###");

  const inputStartArr = [
    {
      type: "text",
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputStartArr);

  const addInput = () => {
    setArr((s) => {
      return [
        ...s,
        {
          value: "",
        },
      ];
    });
  };

  const handleChange = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;
      return newArr;
    });
    console.log(arr)
  };

  return (
    <div>
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

      <button onClick={addInput}>+</button>

      {arr.map((item, i) => {
        return (
          <div key={i}>
            <Row justify="start">
              <Col span={2}>
                <p>###replace-{i}###</p>
              </Col>
              <Col span={2}>
                <Input
                  id={i}
                  placeholder={"Start-" + i}
                  value={item.value}
                  onChange={handleChange}
                  type={item.type}
                />
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};

export default RepeatTextMulti;

//https://stackblitz.com/edit/react-vjfjzz?file=src/App.js
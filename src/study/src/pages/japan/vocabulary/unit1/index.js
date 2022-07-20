import { Col, Row, Divider, Button } from "antd";
import { useState } from "react";
import MasterLayout from "../../../../themes/masterLayout";
import { Data } from "./data";

const VocabularyUnit1 = () => {
  // eslint-disable-next-line
  const [keyWord, setKeyWord] = useState("a");
// eslint-disable-next-line
  const [indexAnswer, setIndexAnswer] = useState(Math.floor(Math.random() * Data.length));

  /* Mang chua cau tra loi */
  // eslint-disable-next-line
  const [arrAnswer, setArrAnswer] = useState(initArrayAnswer());

  

  function initArrayAnswer() {
    let arr = new Array();
    arr.length = 0;
    arr.push(indexAnswer);

    while (true) {
      let randomIndex = Math.floor(Math.random() * Data.length);
      if (arr.includes(randomIndex)) {
        continue;
      } else {
        arr.push(randomIndex);
        if (arr.length === 4) {
          shuffle(arr);
          //   setTimeout(() => {
          //     this.show = false;
          //   }, 500);
          break;
        }
      }
    }
    return arr;
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* chi so cau tra loi dung */
  //indexAnswer: number = 0;

  /* Hien thi icon khi tra loi dung */
  // flagAnswerCorrect: boolean = false;
  /* Hien thi icon khi tra loi sai */
  // flagAnswerWrong: boolean = false;
  /* khi da chon cau tra loi => khong cho click tiep dap an */
  //enableClick: boolean = true;
  /* hien thi loading */
  // show: boolean = false;
  /* Phan tram dung */
  // percenCorrect: number = 0;
  /* So cau dung */
  //  scoreCorrect: number = 0;
  /* So cau sai */
  // scoreWrong: number = 0;

  return (
    <MasterLayout>
      <Divider orientation="left">Unit 1</Divider>
      <Button block type="primary" ghost style={{whiteSpace: "normal",height:'auto',marginBottom:'10px'}}>Wrap around text</Button>
      <Row justify="start">
        <Col span={16}>
          <Button style={{ background: "#002766", color: "white", whiteSpace: "normal",height:'auto',marginBottom:'10px' }} size="large" block >
          {Data[arrAnswer[0]].meaning}
          </Button>
        </Col>
        <Col span={8}></Col>
      </Row>
        <br />
      <Row justify="start">
        <Col span={7}>
          <Button type="primary" block>
            {Data[arrAnswer[0]].hiragana}
          </Button>
        </Col>
        <Col span={2}></Col>
        <Col span={7}>
          <Button type="primary" block>
            {Data[arrAnswer[1]].hiragana}
          </Button>
        </Col>
      </Row>
      <br />
      <Row justify="start">
        <Col span={7}>
          <Button type="primary" block>
            {Data[arrAnswer[2]].hiragana}
          </Button>
        </Col>
        <Col span={2}></Col>
        <Col span={7}>
          <Button type="primary" block>
            {Data[arrAnswer[3]].hiragana}
          </Button>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default VocabularyUnit1;

import { Col, Divider, Row } from "antd";
import MasterLayout from "../../../themes/masterLayout";

const TextSpecial = () => {
  return (
    <MasterLayout>
      <Divider orientation="left">Text Special</Divider>
      <Row justify="start">
        <Col span={24}>
          <h2>●→↑↓←～※■</h2>
          <h2>①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳</h2>
          <h2>㉑㉒㉓㉔㉕㉖㉗㉘㉙㉚㉛㉜㉝㉞㉟㊱㊲㊳㊴㊵㊶㊷㊸㊹㊺㊻㊼㊽㊾㊿</h2>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default TextSpecial;

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

        <Col span={12} offset={1}>
          <table className="table-custom">
            <thead>
              <tr>
                <th>JP</th>
                <th>VN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>対応しました。</td>
                <td>Đã đối ứng</td>
              </tr>
              <tr>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default TextSpecial;

import { Col, Divider, Row } from "antd";

const TextSpecial = () => {
  return (
    <>
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
                <td>対応したものを送り致します。</td>
                <td>Gửi lại phần đã đối ứng</td>
              </tr>
              <tr>
                <td>送りました。</td>
                <td>Đã gửi</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
};

export default TextSpecial;

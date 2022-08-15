import { Col, Row } from "antd";

const SwapDataTwoCell = () => {
  return (
    <>
      <h1>Swap Data Two Cell</h1>
      <Row>
        <Col span={24}>
          <ol>
            <li>Select the cell you want to swap</li>
            <li>Press Ctrl + X on the keyboard and go to cell you want to swap with using the arrow keys</li>
            <li>Press Ctrl + Shift + = on the keyboard</li>
          </ol>
        </Col>
      </Row>
    </>
  );
};

export default SwapDataTwoCell;

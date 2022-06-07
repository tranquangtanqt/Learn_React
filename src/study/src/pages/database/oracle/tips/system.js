import { Col, Row } from "antd";
import React from "react";
import Code from "../../../../components/modules/code";

import MasterLayout from "../../../../themes/masterLayout";

const SystemOracle = () => {
 
  return (
    <MasterLayout>
      <Row justify="start">
        <Col span={24}>
          <h1>1. Thư mục lưu file tablespace</h1>
        </Col>
        <Col span={23} offset={1}>
          <Code code={`D:\\app\\tantq\\virtual\\product\\12.2.0\\dbhome_1\\database`} language="markup" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>2. Kiểm tra user đang sử dụng</h1>
        </Col>
        <Col span={23} offset={1}>
          <Code code={`SELECT user FROM dual`} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>3. Kiểm tra dung lượng DB</h1>
        </Col>
        <Col span={23} offset={1}>
          <Code code={`SELECT SUM(bytes)/1024/1024/1024  FROM user_segments\nSELECT SUM(bytes)/1024/1024 FROM user_segments where segment_name='FCM_RESOURCE'`} language="sql" />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <h1>4. Hiển thị tất cả các cột</h1>
        </Col>
        <Col span={23} offset={1}>
          <Code code={`SELECT table_name, column_name, data_type, data_length FROM USER_TAB_COLUMNS`} language="sql" />
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default SystemOracle;

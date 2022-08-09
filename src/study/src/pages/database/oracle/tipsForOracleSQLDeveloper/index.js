import { Col, Image, Row } from "antd";
import React from "react";

const TipsForOracleSQLDeveloper = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <h1>1. Hotkey</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>New Worksheet Shortcut: ALT + F10</p>
          <p>Format code: CTRL + F7</p>
          <p>Navigate Tab: CTRL + TAB</p>
          <p>Run statement: CTRL + ENTER</p>
        </Col>

        <Col span={24}>
          <h1>2. Change language</h1>
        </Col>

        <Col span={23} offset={1}>
          <p>
            Open: <i>%APPDATA%\sqldeveloper\[version]\product.conf</i>
          </p>
          <p>Add line: AddVMOption -Duser.language=en</p>
        </Col>

        <Col span={24}>
          <h1>3. Block selection</h1>
        </Col>

        <Col span={23} offset={1}>
          <Image
            src={require("../../../../resources/img/database/Trich_1.jpg")}
          />
          <br />
          <br />
          <p>Select Shift and click multiple lines</p>
          <Image
            src={require("../../../../resources/img/database/Trich_2.jpg")}
          />
        </Col>

        <Col span={24}>
          <br />
          <br />
          <h1>4. Export Data With Output Hints</h1>
        </Col>
        <Col span={23} offset={1}>
          <Image
            src={require("../../../../resources/img/database/Trich_3.jpg")}
          />
        </Col>

        <Col span={24}>
          <br />
          <br />
          <h1>5. Split Windows</h1>
        </Col>
        <Col span={23} offset={1}>
          <Image
            src={require("../../../../resources/img/database/Trich_4.jpg")}
          />
        </Col>

        <Col span={24}>
          <br />
          <br />
          <h1>6. Color-code connection</h1>
        </Col>
        <Col span={23} offset={1}>
          <Image
            src={require("../../../../resources/img/database/Trich_5.jpg")}
          />
          <br />
          <br />
          <Image
            src={require("../../../../resources/img/database/Trich_6.jpg")}
          />
        </Col>

        <Col span={24}>
          <br />
          <br />
          <h1>7. Disable Single-click Object</h1>
        </Col>
        <Col span={23} offset={1}>
          <Image
            src={require("../../../../resources/img/database/Trich_7.jpg")}
          />
        </Col>

        <Col span={24}>
          <br />
          <br />
          <h1>8. Fillter navigate tree</h1>
        </Col>
        <Col span={23} offset={1}>
          <Image
            src={require("../../../../resources/img/database/Trich_8.jpg")}
          />
        </Col>

        <Col span={24}>
          <br />
          <br />
          <h1>9. Use Schema Brower</h1>
        </Col>
        <Col span={23} offset={1}>
          <Image
            src={require("../../../../resources/img/database/Trich_9.jpg")}
          />
        </Col>
      </Row>
    </>
  );
};

export default TipsForOracleSQLDeveloper;

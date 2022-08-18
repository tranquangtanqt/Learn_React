import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import { JavaTutorialChapterData } from "./data";

const JavaTutorialChapter = () => {
  return (
    <>
      <Divider orientation="left"></Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1. </h1>
        </Col>
        <Col span={23} offset={1}>
          <p></p>
          <b></b>
        </Col>
        <Col span={22} offset={2}>
          <Code code={JavaTutorialChapterData.one} language="java" />
        </Col>
        <Col span={23} offset={1}>
          <table width="100%" className="table-custom">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <a href="https://www.usebubbles.com/" target="_blank" rel="noopener noreferrer">1. usebubbles _ screen</a>
        </Col>
      </Row>
    </>
  );
};

export default JavaTutorialChapter;

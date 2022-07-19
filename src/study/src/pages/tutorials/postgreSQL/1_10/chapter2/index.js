import { Col, Row, Divider } from "antd";
import Code from "../../../../../components/modules/code";
import MasterLayout from "../../../../../themes/masterLayout";
import { PostgreSQLChapter2Data } from "./data";

const PostgreSQLChapter2 = () => {
  return (
    <MasterLayout>
      <Divider orientation="left">2. Dates, Timestamps, and Intervals</Divider>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1.1 SELECT the last day of month</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>You can select the last day of month.</p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter2Data.one} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>202206 is replaceable with a variable.</p>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1.2 Cast a timestamp or interval to a string</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            You can convert a TIMESTAMP or INTERVAL value to a string with the
            TO_CHAR() function:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter2Data.two} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            This statement will produce the string "12 Jun 2022 04:40:32PM". The
            formatting string can be modified in many different ways; the full
            list of template patterns can be found{" "}
            <a
              href="https://www.postgresql.org/docs/current/functions-formatting.html"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
          <p>
            Note that you can also insert plain text into the formatting string
            and you can use the template patterns in any order:
          </p>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter2Data.three} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <p>
            This will produce the string "Today is Sunday, the 12th day of the
            month of June of 2022". You should keep in mind, though, that any
            template patterns - even the single letter ones like "I", "D", "W" -
            are converted, unless the plain text is in double quotes. As a
            safety measure, you should put all plain text in double quotes, as
            done above.
          </p>
          <p>
            You can localize the string to your language of choice (day and
            month names) by using the TM (translation mode) modifier. This
            option uses the localization setting of the server running
            PostgreSQL or the client connecting to it.
          </p>
        </Col>

        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter2Data.four} language="sql" />
        </Col>
        <Col span={23} offset={1}>
          <p>
            With a Spanish locale setting this produces "Sábado, 12 de Agosto
            del año 2016".
          </p>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1.3 Count the number of records per week</h1>
        </Col>
        <Col span={23} offset={1}>
          <Code code={PostgreSQLChapter2Data.five} language="sql" />
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default PostgreSQLChapter2;

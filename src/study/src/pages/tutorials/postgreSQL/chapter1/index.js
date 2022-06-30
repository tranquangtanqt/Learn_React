import { Col, Row, Divider } from "antd";
import Code from "../../../../components/modules/code";
import MasterLayout from "../../../../themes/masterLayout";
import { PostgreSQLChapter1Data } from "./data";

const PostgreSQLChapter1 = () => {
  return (
    <MasterLayout>
      <Divider orientation="left">1. Data Types</Divider>
      <Row justify="start">
        <Col span={24}>
          <h1>1.1 Numeric Types</h1>
        </Col>
        <Col span={23} offset={1}>
          <table width="100%" className="table-custom">
            <thead>
              <tr>
                <th>Name</th>
                <th>Storage Size</th>
                <th>Description</th>
                <th>Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SMALLINT</td>
                <td>2 bytes</td>
                <td>small-range integer</td>
                <td>-32768 to +32767</td>
              </tr>
              <tr>
                <td>INTEGER</td>
                <td>4 bytes</td>
                <td>ypical choice for integer</td>
                <td>-2147483648 to +2147483647</td>
              </tr>
              <tr>
                <td>BIGINT</td>
                <td>8 bytes</td>
                <td>large-range integer</td>
                <td>-9223372036854775808 to +9223372036854775807</td>
              </tr>
              <tr>
                <td>DECIMAL</td>
                <td>variable</td>
                <td>user-specified precision, exact</td>
                <td>
                  up to 131072 digits before the decimal point; up to 16383
                  digits after the decimal point
                </td>
              </tr>
              <tr>
                <td>NUMERIC</td>
                <td>variable</td>
                <td>user-specified precision, exact</td>
                <td>
                  up to 131072 digits before the decimal point; up to 16383
                  digits after the decimal point
                </td>
              </tr>
              <tr>
                <td>REAL</td>
                <td>4 bytes</td>
                <td>variable-precision, inexact</td>
                <td>6 decimal digits precision</td>
              </tr>
              <tr>
                <td>DOUBLE PRECISION</td>
                <td>8 bytes</td>
                <td>variable-precision, inexact</td>
                <td>15 decimal digits precision</td>
              </tr>
              <tr>
                <td>smallserial</td>
                <td>2 bytes</td>
                <td>small autoincrementing integer</td>
                <td>1 to 32767</td>
              </tr>
              <tr>
                <td>serial</td>
                <td>4 bytes</td>
                <td>autoincrementing integer</td>
                <td>1 to 2147483647</td>
              </tr>
              <tr>
                <td>BIGSERIAL</td>
                <td>8 bytes</td>
                <td>large autoincrementing integer</td>
                <td>1 to 9223372036854775807</td>
              </tr>
              <tr>
                <td>int4range</td>
                <td></td>
                <td>Range of integer</td>
                <td></td>
              </tr>
              <tr>
                <td>int8range</td>
                <td></td>
                <td>Range of bigint</td>
                <td></td>
              </tr>
              <tr>
                <td>numrange</td>
                <td></td>
                <td>Range of numeric</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1.2 Date/Time Types</h1>
        </Col>
        <Col span={23} offset={1}>
          <table width="100%" className="table-custom">
            <thead>
              <tr>
                <th>Name</th>
                <th>Storage Size</th>
                <th>Description</th>
                <th>Low Value</th>
                <th>High Value</th>
                <th>Resolution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TIMESTAMP (without time zone)</td>
                <td>8 bytes</td>
                <td>both date and time (no time zone)</td>
                <td>4713 BC</td>
                <td>294276 AD 1</td>
                <td>1 microsecond / 14 digits</td>
              </tr>
              <tr>
                <td>TIMESTAMP (with time zone)</td>
                <td>8 bytes</td>
                <td>both date and time, with time zone</td>
                <td>4713 BC</td>
                <td>5874897 AD</td>
                <td>1 microsecond / 14 digits</td>
              </tr>
              <tr>
                <td>DATE</td>
                <td>4 bytes</td>
                <td>date (no time of day)</td>
                <td>4713 BC</td>
                <td>5874897 AD</td>
                <td>1 day</td>
              </tr>
              <tr>
                <td>TIME (without time zone)</td>
                <td>8 bytes</td>
                <td>time of day (no date)</td>
                <td>0</td>
                <td>1</td>
                <td>1 microsecond / 14 digits</td>
              </tr>
              <tr>
                <td>TIME (with time zone)</td>
                <td>12 bytes</td>
                <td>times of day only, with time zone</td>
                <td>00:00:00+1459</td>
                <td>24:00:00-1459</td>
                <td>1 microsecond / 14 digits</td>
              </tr>
              <tr>
                <td>INTERVAL</td>
                <td>16 bytes</td>
                <td>time interval</td>
                <td>-178000000 years</td>
                <td>s 178000000 years</td>
                <td>1 microsecond / 14 digits</td>
              </tr>
              <tr>
                <td>tsrange</td>
                <td></td>
                <td>range of timestamp without time zone</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>tstzrange</td>
                <td></td>
                <td>range of timestamp with time zone</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>daterange</td>
                <td></td>
                <td>range of date</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1.3 Geometric Types</h1>
        </Col>
        <Col span={23} offset={1}>
          <table width="100%" className="table-custom">
            <thead>
              <tr>
                <th>Name</th>
                <th>Storage Size</th>
                <th>Description</th>
                <th>Representation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Storage Size</td>
                <td>Description</td>
                <td>Representation</td>
              </tr>
              <tr>
                <td>point</td>
                <td>16 bytes</td>
                <td>Point on a plane</td>
                <td>(x,y)</td>
              </tr>
              <tr>
                <td>line</td>
                <td>32 bytes</td>
                <td>Infinite line</td>
                <td>{"{(A, B, C)}"}</td>
              </tr>
              <tr>
                <td>lseg</td>
                <td>32 bytes</td>
                <td>Finite line segment</td>
                <td>((x1,y1),(x2,y2))</td>
              </tr>
              <tr>
                <td>BOX</td>
                <td>32 bytes</td>
                <td>Rectangular box</td>
                <td>((x1,y1),(x2,y2))</td>
              </tr>
              <tr>
                <td>path</td>
                <td>16+16n bytes</td>
                <td>Closed path (similar to polygon)</td>
                <td>((x1,y1),...)</td>
              </tr>
              <tr>
                <td>path</td>
                <td>16+16n bytes</td>
                <td>Open path</td>
                <td>[(x1,y1),...]</td>
              </tr>
              <tr>
                <td>polygon</td>
                <td>40+16n bytes</td>
                <td>Polygon (similar to closed path)</td>
                <td>((x1,y1),...)</td>
              </tr>
              <tr>
                <td>CIRCLE</td>
                <td>24 bytes</td>
                <td>Circle</td>
                <td>(center point and radius)</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1.4 Network Adress Types</h1>
        </Col>
        <Col span={23} offset={1}>
          <table width="100%" className="table-custom">
            <thead>
              <tr>
                <th>Name</th>
                <th>Storage Size</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CIDR</td>
                <td>7 or 19 bytes</td>
                <td>IPv4 and IPv6 networks</td>
              </tr>
              <tr>
                <td>INET</td>
                <td>7 or 19 bytes</td>
                <td>IPv4 and IPv6 hosts and networks</td>
              </tr>
              <tr>
                <td>macaddr</td>
                <td>6 bytes</td>
                <td>MAC addresses</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1.5 Character Types</h1>
        </Col>
        <Col span={23} offset={1}>
          <table width="100%" className="table-custom">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CHARACTER varying(n), varchar(n)</td>
                <td>variable-length with limit</td>
              </tr>
              <tr>
                <td>character(n), char(n)</td>
                <td>fixed-length, blank padded</td>
              </tr>
              <tr>
                <td>TEXT</td>
                <td>variable unlimited length</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      <Row justify="start" className="m-t-20">
        <Col span={24}>
          <h1>1.6 : Arrays</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            In PostgreSQL you can create Arrays of any built-in, user-defined or
            enum type. In default there is no limit to an Array, but you can
            specify it.
          </p>
          <b>Declaring an Array</b>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter1Data.one} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <b>Creating an Array</b>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter1Data.two} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <b>Accessing an Array</b>
        </Col>
        <Col span={22} offset={2}>
          <p>
            By default PostgreSQL uses a one-based numbering convention for
            arrays, that is, an array of n elements starts with ARRAY[1] and
            ends with ARRAY[n].
          </p>
          <Code code={PostgreSQLChapter1Data.three} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <b>Getting information about an array</b>
        </Col>
        <Col span={22} offset={2}>
          <Code code={PostgreSQLChapter1Data.four} language="sql" />
        </Col>

        <Col span={23} offset={1}>
          <b>Array functions</b>
        </Col>
        <Col span={22} offset={2}>
          <p>will be added</p>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default PostgreSQLChapter1;

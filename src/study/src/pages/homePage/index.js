import { Card, Col, Row } from "antd";
import React from "react";

import MasterLayout from "../../themes/masterLayout";

const Home = () => {
  return (
    <MasterLayout>
      <h1>Home page</h1>
      <Row justify="start">
        <Col span={8}>
          <Card title="Me">
            <a href="https://portal.office365.com" target="_blank" rel="noopener noreferrer" title="office365(E3): tantq@mitani.com&#10;Email: tantq@mitani.co.jp">1. office365</a>
            <br />
            <a href="http://172.30.5.100/pe4j" target="_blank" rel="noopener noreferrer">2. WT</a>
            <br />
            <a href="http://pe/pe4j/" target="_blank" rel="noopener noreferrer">3. WR</a>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Database">
            <a href="https://dbfiddle.uk/" target="_blank" rel="noopener noreferrer">1. dbfiddle</a>
            <br />
            <a href="https://www.mockaroo.com/" target="_blank" rel="noopener noreferrer">2. mockaroo</a>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Image - Video">
            <a href="https://www.usebubbles.com/" target="_blank" rel="noopener noreferrer">1. usebubbles _ screen</a>
          </Card>
        </Col>
      </Row>

<hr />
      <Row justify="start">
        <Col span={8}>
          <Card title="Algorithm">
            <a href="https://projecteuler.net/" target="_blank" rel="noopener noreferrer">1. Project Euler</a>
            <br />
            <a href="http://oj.husc.edu.vn/" target="_blank" rel="noopener noreferrer">2. Husc</a>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="CSharp">
            <a href="https://github.com/thangchung/awesome-dotnet-core" target="_blank" rel="noopener noreferrer">1. Awesome dotnet core</a>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Java">
            <a href="https://github.com/akullpp/awesome-java" target="_blank" rel="noopener noreferrer">1. Awesome java</a>
            <br/>
            <a href="https://github.com/Blankj/awesome-java-leetcode" target="_blank" rel="noopener noreferrer">1. Awesome java leetcode</a>
          </Card>
        </Col>
      </Row>
<hr />
      <Row justify="start">
        <Col span={8}>
          <Card title="Javascript">
            <a href="https://github.com/sorrycc/awesome-javascript" target="_blank" rel="noopener noreferrer">1. Awesome javascript</a>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Book">
            <a href="https://books.goalkicker.com/" target="_blank" rel="noopener noreferrer">1. goalkicker</a>
          </Card>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default Home;

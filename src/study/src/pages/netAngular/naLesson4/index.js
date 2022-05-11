import { Col, Row, Divider, Image } from "antd";
import Code from "../../../components/modules/code";
import MasterLayout from "../../../themes/masterLayout";
import { naLesson4Data } from './data';

const NALesson4 = () => {

  return (
    <MasterLayout>
      <Divider orientation="left">Setting donet-ef</Divider>
      <Row justify="start">
        <Col span={24}>
          <h1>1. Setting donet-ef</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>- Access nuget.org</p>
          <p>- Search: dotnet-ef</p>
          <p>- Select version</p>
          <p>- Run command: dotnet tool install --global dotnet-ef --version 5.0.14</p>
          <Image
            src={require("../../../resources/img/netAngular/Net_Angular_5.jpg")}
          />
        </Col>

        {/* <Col span={24}>
          <h1>2. Adding a DBContext class</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>- Add folder: API\Data</p>
          <p>- Add class: DataContext</p>
          <Code code={naLesson3Data.dataContex} language="csharp" />
        </Col>

        <Col span={24}>
          <h1>3. Creating the connection string</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>- Editing appsettings.Development.json</p>
          <Code code={naLesson3Data.appsettings} language="json" />
          <p>- Startup.cs</p>
          <Code code={naLesson3Data.startUp} language="csharp" />
        </Col> */}
      </Row>
    </MasterLayout>
  );
};

export default NALesson4;

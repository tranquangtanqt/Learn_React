import { Col, Row, Divider, Image } from "antd";
import Code from "../../../components/modules/code";
import MasterLayout from "../../../themes/masterLayout";

const NALesson3 = () => {
const user = `namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }
    }
}`;

  return (
    <MasterLayout>
      <Divider orientation="left">Adding Entity Framework</Divider>
      <Row justify="start">
        <Col span={24}>
          <h1>1. Add Entity User</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>- Create folder Entities</p>
          <p>- Create class AppUser</p>
          <Code code={user} language="csharp" />
        </Col>

        <Col span={24}>
          <h1>1. Adding a DBContext class</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>- An Object Relational Mapper (ORM)</p>
          <p>
            - Translates our code into SQL commands that update our tables in
            the database
          </p>
          <Image
            src={require("../../../resources/img/netAngular/Net_Angular_4.jpg")}
          />
        </Col>
        <Col span={24}>
          <h1>2. Entity Framework Features</h1>
        </Col>
        <Col span={23} offset={1}>
          <p>
            - Querying: EF allows us to query our database using link queries
            that I mentioned very briefly before
          </p>
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default NALesson3;

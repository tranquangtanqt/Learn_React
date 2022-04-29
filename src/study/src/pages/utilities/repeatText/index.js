import { Tabs } from "antd";
import MasterLayout from "../../../themes/masterLayout";
import RepeatTextMulti from "./repeatTextMulti";
import RepeatTextOne from "./repeatTextOne";

const RepeatText = () => {
  const callback = (key) => {
    console.log(key);
  };

  const { TabPane } = Tabs;

  return (
    <MasterLayout>
      <Tabs defaultActiveKey="2" onChange={callback}>
        <TabPane tab="ONE" key="1">
          <RepeatTextOne></RepeatTextOne>
        </TabPane>
        <TabPane tab="MULTI" key="2">
        <RepeatTextMulti></RepeatTextMulti>
        </TabPane>
      </Tabs>
    </MasterLayout>
  );
};

export default RepeatText;

import { Tabs } from "antd";
import RandomMultiInsertSQL from "./randomMultiInsertSQL";
import RandomProcedureInsertSQL from "./randomProcedureInsertSQL";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const RandomInsertSQL = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="INSERT" key="1">
          <RandomMultiInsertSQL />
        </TabPane>
        <TabPane tab="PROCEDURE" key="2">
          <RandomProcedureInsertSQL />
        </TabPane>
      </Tabs>
    </>
  );
};

export default RandomInsertSQL;

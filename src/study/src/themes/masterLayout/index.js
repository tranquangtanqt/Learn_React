import React, { useState } from "react";
import "./index.scss";
import "./utils.scss";

import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
  DatabaseOutlined,
  QuestionCircleOutlined,
  HighlightOutlined,
  AndroidOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  // eslint-disable-next-line
  FileAddOutlined
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const MasterLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [hidden, setHidden] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const hiddenMenu = () => {
    let layoutSider = document.getElementsByClassName('ant-layout-sider');
    console.log(layoutSider[0].classList.contains('hidden'))
    if(layoutSider[0].classList.contains('hidden')) {
      layoutSider[0].classList.remove('hidden');
      setHidden(false);
    } else {
      layoutSider[0].classList.add('hidden');
      setHidden(true);
    }
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          {/* <div className="custom-logo"><Link to={"/"}>LEARNING</Link></div> */}
        </div>
        <Menu key={"menu_"} theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {
            <SubMenu key="sub_database" title={ <span> <DatabaseOutlined /> <span>Database</span> </span> } >
              <Menu.Item key={"sub_database_postgresql"}>
                Postgresql
                <Link to={"/database/postgresql"} />
              </Menu.Item>
              <Menu.Item key={"sub_database_oracle"}>
                Oracle
                <Link to={"/database/oracle"} />
              </Menu.Item>
            </SubMenu>
          }
          {
            <SubMenu key="sub_programming" title={ <span> <AndroidOutlined /> <span>Programming</span> </span> } >
              <Menu.Item key={"sub_programming-csharp"}>
                C#
                <Link to={"/programming-csharp"} />
              </Menu.Item>
              <Menu.Item key={"sub_programming-java"}>
                Java
                <Link to={"/programming-java"} />
              </Menu.Item>
              <Menu.Item key={"sub_programming-php"}>
                PHP
                <Link to={"/programming-php"} />
              </Menu.Item>
            </SubMenu>
          }
          {
            <Menu.Item key={"sub_tips"} >
              <span> <QuestionCircleOutlined /> <span>Tips</span> </span>
              <Link to={"/tips"} />
            </Menu.Item>
          }
          {
            <SubMenu key="sub_tutorial" title={ <span> <HighlightOutlined /> <span>Tutorials</span> </span> } >
              <Menu.Item key={"sub_tutorial_excel"}>
                Excel
                <Link to={"/tutorial/excel"} />
              </Menu.Item>
              <Menu.Item key={"sub_tutorial_java"}>
                Java
                <Link to={"/tutorial/java"} />
              </Menu.Item>
              
              <Menu.Item key={"sub_tutorial_net_angular"}>
                Net - Angular
                <Link to={"/tutorial/net-angular"} />
              </Menu.Item>
              <Menu.Item key={"sub_tutorial_postgreSQL"}>
              PostgreSQL
                <Link to={"/tutorial/postgreSQL"} />
              </Menu.Item>
            </SubMenu>
          }
          {
            <Menu.Item key={"sub_utilities"} >
              <span> <SettingOutlined /> <span>Utilities</span> </span>
              <Link to={"/utilities"} />
            </Menu.Item>
          }
          {
            <SubMenu key="sub_demo" title={ <span> <QuestionCircleOutlined /> <span>Demo</span> </span> } >
              <Menu.Item key={"sub_demo_connect_API"}>
                Connect API
                <Link to={"/demo/connectAPI"} />
              </Menu.Item>
              <Menu.Item key={"sub_demo_highlightcode"}>
                HighLight Code
                <Link to={"/demo/highlightcode"} />
              </Menu.Item>
              <Menu.Item key={"sub_demo_readExcel"}>
                ReadExcel
                <Link to={"/demo/readExcel"} />
              </Menu.Item>
              <Menu.Item key={"sub_demo_createExcel"}>
                CreateExcel
                <Link to={"/demo/createExcel"} />
              </Menu.Item>
            </SubMenu>
          }
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {collapsed ? (
            <MenuUnfoldOutlined className="trigger" onClick={toggle} />
          ) : (
            <MenuFoldOutlined className="trigger" onClick={toggle} />
          )}
          <DoubleLeftOutlined onClick={hiddenMenu} className={`${hidden ? 'hidden' : ''}`}/>
          <DoubleRightOutlined onClick={hiddenMenu} className={`${!hidden ? 'hidden' : ''}`}/>
        </Header>

        <Content className="site-layout-background-content">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MasterLayout;

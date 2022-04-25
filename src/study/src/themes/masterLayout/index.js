import React, { useState } from "react";
import "./index.scss";

import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  // VideoCameraOutlined,
  // UploadOutlined,
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const MasterLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          key={"menu_Utilities"}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
        >
          {
            <SubMenu
              key="sub_Utilities"
              title={
                <span>
                  <UserOutlined />
                  <span>Utilities</span>
                </span>
              }
            >
              <Menu.Item key={"sub1_sub_Utilities_TinyMCE"}>
                TinyMCE
                <Link to={"/utilities/tinyMCE"} />
              </Menu.Item>
              <Menu.Item key={"sub1_sub_Utilities_TextLoop"}>
                TextLoop
                <Link to={"/utilities/textLoop"} />
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
        </Header>

        <Content className="site-layout-background-content">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MasterLayout;

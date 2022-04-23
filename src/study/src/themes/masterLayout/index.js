import React, { useState } from "react";
import "./index.scss";

import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";

const { Header, Sider, Content } = Layout;

const MasterLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const menus = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Dashboard",
      link: "/",
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "About",
      link: "/about",
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "Categories",
      link: "/",
    },
  ];

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {menus.map((item) => (
            <Menu.Item key={item.key}>
              {item.icon}
              <span>{item.label}</span>
              <Link to={item.link} />
            </Menu.Item>
          ))}
          {
            <SubMenu
              key="sub4"
              title={
                <span>
                  <UserOutlined />
                  <span>Sub menu 1</span>
                </span>
              }
            >
              <Menu.Item>Chill menu 1</Menu.Item>
              <SubMenu
                title={
                  <span>
                    <span>Chill menu 2</span>
                  </span>
                }
              >
                <Menu.Item>Chill menu 2 - 2</Menu.Item>
              </SubMenu>
              <Menu.Item>Chill menu 3</Menu.Item>
              <Menu.Item>Chill menu 4</Menu.Item>
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

        <Content className="site-layout-background">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MasterLayout;

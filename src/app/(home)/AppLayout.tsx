"use client";

import Image from "next/image";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Divider, Layout, Menu, theme } from "antd";

const { Header, Sider, Content } = Layout;

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} style={{ margin: 40 }} width={250}>
        <Image
          src="/logo.png"
          width={250}
          height={250}
          alt="Logo"
          className="mb-15 rounded-xl"
        />

        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ background: "#C9CCD1" }}
          items={[
            { key: "1", icon: <UserOutlined />, label: "Home" },
            { key: "2", icon: <VideoCameraOutlined />, label: "Meetings" },
            { key: "3", icon: <UploadOutlined />, label: "Messages" },
          ]}
        />
        <div className="border-t border-gray-400 my-2" />
      </Sider>

      <Layout>
        <Content
          style={{
            margin: 40,
            marginLeft: 0,
            padding: 15,
            background: colorBgContainer,
          }}
          className="rounded-4xl"
        >
          <Header style={{ padding: 0, background: colorBgContainer }}>
            {/* Header */}
          </Header>
          <Divider />
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
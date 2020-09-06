import * as React from "react";
import {Row, Col} from "antd";
import {Layout, Menu} from "antd";
import styled from 'styled-components'
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import Link from "next/link";

const HeaderStyled = styled('Header')`
  background-color : white;
  padding: 0;
  font-size:50px;
  display: flex;
  
  border: 3px solid red;
  
`

const AppLayout = ({children}) => {
  const {Header, Content, Sider} = Layout;
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          backgroundColor: 'white',
        }}
      >
        {/*<div className="logo" style={{margin: 50}}/>*/}
        <HeaderStyled className="site-layout-sub-header-background" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={["4"]}>
          {/*<Menu.Item key="1" icon={<UserOutlined/>}>*/}
          {/*  <Link href={"/errors"}><a>Error Collection</a></Link>*/}
          {/*</Menu.Item>*/}
          {/*<Menu.Item key="2" icon={<VideoCameraOutlined/>}>*/}
          {/*  Study logs*/}
          {/*</Menu.Item>*/}
          <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="Errors">
            <Menu.Item key="1">react errors</Menu.Item>
            <Menu.Item key="2">next errors</Menu.Item>
            <Menu.Item key="3">js errors</Menu.Item>
            <Menu.Item key="4">etc</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub2" icon={<UserOutlined />} title="study logs">
            <Menu.Item key="5">react</Menu.Item>
            <Menu.Item key="6">next</Menu.Item>
            <Menu.Item key="7">js</Menu.Item>
            <Menu.Item key="8">etc</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub3" icon={<UserOutlined />} title="test">
            <Menu.Item key="9">option1</Menu.Item>
            <Menu.Item key="10">option2</Menu.Item>
            <Menu.Item key="11">option3</Menu.Item>
            <Menu.Item key="12">option4</Menu.Item>
          </Menu.SubMenu>
          {/*<Menu.SubMenu key="sub4" icon={<UserOutlined />} title="subnav 1">*/}
          {/*  <Menu.Item key="1">option1</Menu.Item>*/}
          {/*  <Menu.Item key="2">option2</Menu.Item>*/}
          {/*  <Menu.Item key="3">option3</Menu.Item>*/}
          {/*  <Menu.Item key="4">option4</Menu.Item>*/}
          {/*</Menu.SubMenu>*/}
        </Menu>
      </Sider>
      <Layout>
        <HeaderStyled className="site-layout-sub-header-background" >
          <div>
            <span>Home</span>
            <span>Login</span>
            <span>Sign up</span>
          </div>
        </HeaderStyled>
        <Content
          style={{
            margin: "24px 16px 0",
            height: '100vh',
            right:0, // TODO: 넣을 지 뺄 지 고민.
          }}

        >
          <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
            {children}
          </div>
        </Content>
        {/*<Footer style={{textAlign: "center"}}>Ant Design ©2018 Created by Ant UED</Footer>*/}
      </Layout>
    </Layout>
  );
};

export default AppLayout;

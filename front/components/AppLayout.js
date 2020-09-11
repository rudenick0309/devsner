import * as React from "react";
import {Row, Col, Breadcrumb, } from "antd";
import {Layout, Menu} from "antd";
import styled from 'styled-components'
import Link from "next/link";
// import Error from "./Erros";

const { SubMenu } = Menu;
const {Header, Content, Sider} = Layout;

const HeaderStyled = styled(Header)`
  background-color : white;
  font-size:20px;
  display: flex;
  justify-content:flex-end;
`

const TestItem = styled(Menu.Item)`
  font-size:24px;
`

const TextSubmenu = styled(SubMenu)`
  font-size: 24px;
  background-color: pink;
`

const AppLayout = ({children}) => {
  const {Item} = Menu;

  return (
    <Layout>

      <HeaderStyled style={{ backgroundColor:'white'}} >
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link href={'/'}><a>Home</a></Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href={'/login'}><a>Login</a></Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href={'/signup'}><a>Sign Up</a></Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link href={'/edit'}><a>Edit</a></Link>
          </Menu.Item>

        </Menu>
      </HeaderStyled>

      <Layout>

        <Sider width={200} collapsible={false} style={{border: '3px solid red'}}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['Errors']}
            style={{ height: '100vh', borderRight: 0 }}
          >


            <Menu.ItemGroup key="sub1" title="Errors" >
              <Menu.Item key="1">
                <Link href={'/errors/react'}><a>react</a></Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link href={'/errors/next'}><a>next</a></Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link href={'/errors/js'}><a>js</a></Link>
              </Menu.Item>
            </Menu.ItemGroup>

            <Menu.ItemGroup key="sub2"  title="study-logs">
              <Menu.Item key="5">react</Menu.Item>
              <Menu.Item key="6">next</Menu.Item>
              <Menu.Item key="7">js</Menu.Item>
            </Menu.ItemGroup>

          </Menu>
        </Sider>

        <Layout style={{ padding: '0 24px 24px', }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>

      </Layout>

    </Layout>
  );
};

export default AppLayout;

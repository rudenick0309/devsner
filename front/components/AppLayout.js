import * as React from "react";
import {Row, Col, Breadcrumb, } from "antd";
import {Layout, Menu} from "antd";
import styled from 'styled-components'
import {
  LaptopOutlined,
  NotificationOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import Link from "next/link";
import Error from "./Erros";

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


// <Layout>
//   <Sider
//     breakpoint="lg"
//     collapsedWidth="0"
//     style={{
//       // overflow: 'auto',
//       height: '100vh',
//       position: 'fixed',
//       left:0,
//
//       backgroundColor: 'white',
//     }}
//   >
//     {/*<div className="logo" style={{margin: 50}}/>*/}
//     <HeaderStyled className="site-layout-sub-header-background" />
//     <Menu theme="light" mode="inline" defaultSelectedKeys={["4"]}>
//       <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="Errors">
//         <Menu.Item key="1">react errors</Menu.Item>
//         <Menu.Item key="2">next errors</Menu.Item>
//         <Menu.Item key="3">js errors</Menu.Item>
//         <Menu.Item key="4">etc</Menu.Item>
//       </Menu.SubMenu>
//       <Menu.SubMenu key="sub2" icon={<UserOutlined />} title="study logs">
//         <Menu.Item key="5">react</Menu.Item>
//         <Menu.Item key="6">next</Menu.Item>
//         <Menu.Item key="7">js</Menu.Item>
//         <Menu.Item key="8">etc</Menu.Item>
//       </Menu.SubMenu>
//       <Menu.SubMenu key="sub3" icon={<UserOutlined />} title="test">
//         <Menu.Item key="9">option1</Menu.Item>
//         <Menu.Item key="10">option2</Menu.Item>
//         <Menu.Item key="11">option3</Menu.Item>
//         <Menu.Item key="12">option4</Menu.Item>
//       </Menu.SubMenu>
//     </Menu>
//   </Sider>
//   <Layout>
//     <HeaderStyled className="site-layout-sub-header-background" >
//
//       <HeaderDivStyled>
//         <div>Home</div>
//         {/*<div style={{ marginLeft:'300px'}}>Home</div>*/}
//         <div>Login</div>
//         <div >Sign up</div>
//       </HeaderDivStyled>
//
//     </HeaderStyled>
//     <Content
//       style={{
//         margin: "24px 16px 0",
//         height: '100vh',
//         right:0, // TODO: 넣을 지 뺄 지 고민.
//       }}
//
//     >
//       <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
//         {children}
//       </div>
//     </Content>
//     {/*<Footer style={{textAlign: "center"}}>Ant Design ©2018 Created by Ant UED</Footer>*/}
//   </Layout>
// </Layout>

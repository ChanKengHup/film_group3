import { NavLink, Redirect, Route } from "react-router-dom";
import { Fragment, useState, React, useEffect } from "react";
import { useSelector } from "react-redux";
import { Layout, Menu, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    UserOutlined,
    FileOutlined,
} from '@ant-design/icons';
import { history } from "../../App";
import '../../assets/style/admin.css'

const { Header, Content, Footer, Sider } = Layout;

export const AdminTemplate = (props) => {
    const { userLogin } = useSelector(state => state.LogReducer)
    const [state, setState] = useState({
        collapsed: false,
    })

    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };

    if (userLogin.maLoaiNguoiDung === 'KhachHang' || !(userLogin.maLoaiNguoiDung)) {
        // alert("Bạn không có quyền truy cập vào trang admin!")
        // history.push('/')
    }
    if (userLogin.maLoaiNguoiDung === 'QuanTri') {
        history.push('/admin')
    }

    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment>

            <Layout style={{ minHeight: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={state.collapsed}>
                    <NavLink to='/' className="logo">
                        <img className="p-3" src="http://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="" />
                    </NavLink>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
                        <Menu.SubMenu key="1" icon={<UserOutlined />} title='Users'>
                            <Menu.Item key="21" icon={<UserOutlined />}>
                                <NavLink to='/admin'>Users</NavLink>
                            </Menu.Item>
                            <Menu.Item key="20" icon={<FileOutlined />}>
                                <NavLink to='/admin/adduser'>Add user</NavLink>
                            </Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key='sub1' icon={<FileOutlined />} title='Films'>
                            <Menu.Item key="10" icon={<FileOutlined />}>
                                <NavLink to='/admin/films'>Films</NavLink>
                            </Menu.Item>
                            <Menu.Item key="11" icon={<FileOutlined />}>
                                <NavLink to='/admin/films/addnew'>Add film</NavLink>
                            </Menu.Item>
                        </Menu.SubMenu>

                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background header__admin-style" style={{ padding: 0 }}>

                        <MenuUnfoldOutlined style={{ color: "white", fontSize: "20px" }} />

                        <div className="d-flex justify-content-between align-items-center">
                            <h6 className="hello__tk pr-5">Hello! {userLogin.taiKhoan}</h6>
                            <Button className="mr-4 btn__dangXuat" onClick={() => {
                                localStorage.removeItem("LOGIN_USER");
                                localStorage.removeItem("TOKEN_MOVIE");
                                history.push('/')
                                window.location.reload()
                            }

                            }>Đăng Xuất</Button>
                        </div>
                    </Header>

                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >

                        <props.component {...propsRoute} />

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant design 2018 Created by ant UED</Footer>
                </Layout>
            </Layout>

        </Fragment>
    }} />

}




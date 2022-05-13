import { NavLink, Redirect, Route } from "react-router-dom";
import { Fragment, useState, React, useEffect } from "react";

import { useSelector } from "react-redux";


import { Layout, Menu, Breadcrumb, MenuProps } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    FileOutlined,
} from '@ant-design/icons';
import { history } from "../../App";
import SubMenu from "antd/lib/menu/SubMenu";

const { Header, Content, Footer, Sider } = Layout;

export const AdminTemplate = (props) => {

    // const {component,...restProps} = props
    // const {userLogin} = useSelector(state = state.QuanLyNguoiDungReducer)
    const [state, setState] = useState({
        collapsed: false,
    })

    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0)

    })

    // if(!localStorage.getItem(USER_LOGIN)){
    //     alert('Bạn không được cấp quyền vào trang này !')
    //     return <Redirect to='/'/>
    // }

    // if(userLogin.maLoaiNguoiDung !== 'QuanTri'){
    //     alert("Bạn không có quyền truy cập vào trang này!")
    //     return <Redirect to='/'/>
    // }

    // const operations = <Fragment>
    //     {!_isEmpty(userLogin) ? <Fragment> <button onClick={() => {
    //         history.push('/profile')
    //     }}><div style={{
    //         width: '50px', height: 50, display: 'flex', justifyContent: 'center', alignItem: 'center'}} 
    //         className='text-2xl ml-5'
    //         localStorage.removeItem(USER_LOGIN); localStorage.removeItem(TOKEN);
    //         history.push('/home');
    //         window.location.reload();
    //     }} /> Đăng Xuất</button></Fragment> : ''}
    // </Fragment>



    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment>

            <Layout style={{ minHeight: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={state.collapsed}>
                    <div className="logo p-4">
                        <img className="img-fluid" src="http://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="" />
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <NavLink to='/admin/users'>Users</NavLink>
                        </Menu.Item>
                        <Menu.SubMenu key='sub1' icon={<FileOutlined />} title='Films'>
                            <Menu.Item key="10" icon={<FileOutlined />}>
                                <NavLink to='/admin/films'>Films</NavLink>
                            </Menu.Item>
                            <Menu.Item key="11" icon={<FileOutlined />}>
                                <NavLink to='/admin/films/addnew'>Addnews</NavLink>
                            </Menu.Item>
                        </Menu.SubMenu>

                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>

                        {state.collapsed ? <MenuUnfoldOutlined style={{ color: "white", fontSize: "20px" }} onClick={toggle} /> : <MenuFoldOutlined style={{ color: "white", fontSize: "20px" }} onClick={toggle} />}
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




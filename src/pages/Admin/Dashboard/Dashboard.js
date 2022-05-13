
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Input } from 'antd';
import { EditOutlined, DeleteOutlined, SearchOutlined, CalendarOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'
import { history } from '../../../App';
import { layDanhSachNDAction, xoaNDAction } from '../../../redux/actions/QuanLyNguoiDungAction';



const { Search } = Input;

export default function Dashboard(props) {

  const { mangND } = useSelector(state => state.QuanLyNguoiDungReducer);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(layDanhSachNDAction());
  }, [])

  const columns = [
    {
      title: 'Tài Khoản',
      dataIndex: 'taiKhoan',
      sorter: (a, b) => {
        let taiKhoanA = a.taiKhoan.toLowerCase().trim();
        let taiKhoanB = b.taiKhoan.toLowerCase().trim();
        if (taiKhoanA > taiKhoanB) {
          return 1;
        }
        return -1
      },
      width: "15%"
    }, 
    {
      title: 'Họ Tên',
      dataIndex: 'hoTen',
      sorter: (a, b) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
          return 1;
        }
        return -1
      },
      width: "15%"
    },
    
    {
      title: 'Email',
      dataIndex: 'email',
      width: "15%"
    },
    {
      title: 'Số Điện Thoại',
      dataIndex: 'soDt',
      width: "15%"
    },
    {
      title: 'Mật Khẩu',
      dataIndex: 'matKhau',
      width: "15%"
    },
    {
      title: 'Loại Người Dùng',
      dataIndex: 'maLoaiNguoiDung',
      width: "10%",
      sorter: (a, b) => {
        let loaiA = a.maLoaiNguoiDung
        let loaiB = b.maLoaiNguoiDung
        if (loaiA > loaiB) {
          return 1;
        }
        return -1
      },
    },

    {
      title: 'Hành Động',
      dataIndex: 'maPhim',

      render: (text, ND) => {
        return (
          <Fragment key={`${mangND.taiKhoan}`} >
            <NavLink style={{ fontSize: 20 }} to={`/admin/edituser/${ND.taiKhoan}`} >
              <EditOutlined />
            </NavLink>
            <DeleteOutlined  className='text-danger ml-3' style={{ fontSize: 20, }} onClick={() => {
              if (window.confirm('Bạn có chắc muốn xoá người dùng' + ND.taiKhoan)) {
                dispatch(xoaNDAction(ND.taiKhoan))
              }
            }}/>
          </Fragment>)
      },
      width: "15%"
    },

  ];

  const data = mangND

  const onSearch = (value) => {
    dispatch(layDanhSachNDAction(value))
  };

  return (
    <div>
      <h2>Quản Lý Người Dùng</h2>
      <Button className='my-3' type="primary"  onClick={() => {
        history.push('/admin/adduser')
      }} >Thêm Người Dùng</Button>
      <Search
        className='mb-4'
        placeholder="Search name..."
        size="large"
        enterButton={<SearchOutlined />} 
        onSearch={onSearch}
      />
      <Table key={`${data.taiKhoan}`} columns={columns} dataSource={data}  rowKey={"taiKhoan"} />
    </div>
  )
}

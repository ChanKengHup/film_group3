import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment'
import FormList from 'antd/lib/form/FormList';
import { useDispatch, useSelector } from 'react-redux'
import { layThongTinPhimAction, capNhatPhimUploadAction } from '../../../redux/actions/QuanLyPhimAction';
import { GROUP_ID } from '../../../services/TypeService';
import { useEffect } from 'react';
import { QuanLyPhimReducer } from '../../../redux/reducers/QuanLyPhimReducer';

const Edit = (props) => {

  const [componentSize, setComponentSize] = useState('default');

  //lay thong tin phim tuqf reducer
  const { thongTinPhim } = useSelector(state => state.QuanLyPhimReducer);

  const [img, setImg] = useState('')
  const dispatch = useDispatch();
  console.log(thongTinPhim);
  //lay id (maPhim)
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(layThongTinPhimAction(id));

  }, [])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: thongTinPhim.maPhim,
      tenPhim: thongTinPhim.tenPhim,
      trailer: thongTinPhim.trailer,
      moTa: thongTinPhim.moTa,
      ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
      dangChieu: thongTinPhim.dangChieu,
      sapChieu: thongTinPhim.sapChieu,
      hot: thongTinPhim.hot,
      danhGia: thongTinPhim.danhGia,
      hinhAnh: null,
      maNhom: 'GP03'
    },

    onSubmit: values => {
      console.log('values', values);
      values.maNhom = GROUP_ID
      //tạo đối tượng từ form data => đưa  giá trị values từ formik vào formdata 
      let formData = new FormData();
      for (let key in values) {
        if (key !== 'hinhAnh') {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append('File', values.hinhAnh, values.hinhAnh.name);
          }
        }
      }
      dispatch(capNhatPhimUploadAction(formData))
    },
  })

  const handeChangDatePicker = (value) => {

    let ngayKhoiChieu = moment(value)
    formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu)

  }
  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value)
    }
  }

  //thêm hình ảnh, hiển thị trực tiếp
  const handelChangeFile = async (e) => {
    let file = e.target.files[0];

    if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImg(e.target.result)
      }
      //Đem dữ liệu file lưu vào formik
     await formik.setFieldValue('hinhAnh', file)
    }
  }

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (

    <Form
      // onSubmit={formik.handleSubmit}
      onSubmitCapture={formik.handleSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <h3>Sửa Thông Tin - <span className='text-primary'>{thongTinPhim.tenPhim}</span> </h3>
      <Form.Item label="Form Size" name="size" className='mt-4'>
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Tên Phim">
        <Input name='tenPhim' onChange={formik.handleChange} value={formik.values.tenPhim} />
      </Form.Item>
      <Form.Item label="Trailer">
        <Input name='trailer' onChange={formik.handleChange} value={formik.values.trailer} />
      </Form.Item>
      <Form.Item label="Mô Tả" >
        <Input name='moTa' onChange={formik.handleChange} value={formik.values.moTa} />
      </Form.Item>
      <Form.Item label="Ngày khởi chiếu">
        <DatePicker format={'DD/MM/YYYY'} onChange={handeChangDatePicker} value={moment(formik.values.ngayKhoiChieu)} />
      </Form.Item>
      <Form.Item label="Đang chiếu">
        <Switch onChange={handleChangeSwitch('dangChieu')} checked={formik.values.dangChieu} />
      </Form.Item>
      <Form.Item label="Sắp chiếu">
        <Switch onChange={handleChangeSwitch('sapChieu')} checked={formik.values.sapChieu} />
      </Form.Item>
      <Form.Item label="Hot">
        <Switch onChange={handleChangeSwitch('hot')} checked={formik.values.hot} />
      </Form.Item>

      <Form.Item label="Số sao">
        <InputNumber onChange={handleChangeSwitch('danhGia')} min={1} max={10} value={formik.values.danhGia} />
      </Form.Item>
      <Form.Item label="Hình Ảnh">
        <input type='file' onChange={handelChangeFile} accept='image/png, image/jpeg, image/png ,image/gif' />
        <br />
        <img alt="" width={150} height={200} src={img === '' ? thongTinPhim.hinhAnh : img} />
      </Form.Item>
      <Form.Item label="Tác Vụ">
        <button type='submit' className='btn btn-success'>Cập Nhật</button>
      </Form.Item>
    </Form>
  );
};

export default Edit



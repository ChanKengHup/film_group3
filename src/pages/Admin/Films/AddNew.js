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
import {useDispatch} from 'react-redux'
import { themPhimUploadHinh } from '../../../redux/actions/QuanLyPhimAction';
import { GROUP_ID } from '../../../services/TypeService';

const AddNew = () => {
  const [componentSize, setComponentSize] = useState('default');
  const [imgSrc,setImgSrc] = useState('')
  const dispatch = useDispatch();


  const formik = useFormik({
    initialValues: {
      tenPhim: '',
      trailer: '',
      moTa: '',
      ngayKhoiChieu: '',
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
    },
    
    onSubmit: values => {
      console.log('values', values);
      values.maNhom = GROUP_ID
      //tạo đối tượng từ form data => đưa  giá trị values từ formik vào formdata 
      let formData = new FormData();
      for(let key in values){
        if(key !== 'hinhAnh'){
          formData.append(key,values[key]);
        }else{
          formData.append('File',values.hinhAnh, values.hinhAnh.name);
        }
      }
      console.log('formData', formData.get('tenPhim'));
      // goi API gửi các giá trị formdata về backend xử lí
      dispatch(themPhimUploadHinh(formData));
    },
  })

  const handeChangDatePicker= (value)=>{
    
    let ngayKhoiChieu = moment(value).format('DD/MM/YYYY')
    formik.setFieldValue('ngayKhoiChieu',ngayKhoiChieu)

  }
  const handleChangeSwitch = (name)=>{
    return(value)=>{
      formik.setFieldValue(name,value)
    }
  }

  //thêm hình ảnh, hiển thị trực tiếp
  const handelChangeFile = (e)=> {
    let file = e.target.files[0];

    if(file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png'){
     
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload =(e)=>{ 
        setImgSrc(e.target.result)
      }
      //Đem dữ liệu file lưu vào formik
      formik.setFieldValue('hinhAnh',file)
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
      <h3>Thêm phim mới</h3>
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Tên Phim" name='tenPhim' onChange={formik.handleChange}>
        <Input name='tenPhim' />
      </Form.Item>
      <Form.Item label="Trailer" name='trailer' onChange={formik.handleChange}>
        <Input name='trailer' />
      </Form.Item>
      <Form.Item label="Mô Tả" name='moTa' onChange={formik.handleChange}>
        <Input name='moTa' />
      </Form.Item>
      <Form.Item label="Ngày khởi chiếu">
        <DatePicker format={'DD/MM/YYYY'} onChange={handeChangDatePicker} />
      </Form.Item>
      <Form.Item label="Đang chiếu">
        {/* <Switch name="dangChieu" onChange={value=>{formik.setFieldValue('dangChieu',value)}}/> */}
        <Switch  onChange={handleChangeSwitch('dangChieu')} />
      </Form.Item>
      <Form.Item label="Sắp chiếu">
        <Switch  onChange={handleChangeSwitch('sapChieu')}/>
      </Form.Item>
      <Form.Item label="Hot">
        <Switch onChange={handleChangeSwitch('hot')}/>
      </Form.Item>

      <Form.Item label="Số sao">
        <InputNumber onChange={handleChangeSwitch('danhGia')} min={1} max={10}/>
      </Form.Item>
      <Form.Item label="Hình Ảnh">
        <input type='file' onChange={handelChangeFile} accept='image/png, image/jpeg, image/png ,image/gif'/>
        <br/>
        <img src={imgSrc} alt="" width={150} height={200}/>
      </Form.Item>
      <Form.Item label="Tác Vụ">
        <button type='submit' className='btn btn-primary'>Thêm Phim</button>
      </Form.Item>
    </Form>
  );
};

export default AddNew
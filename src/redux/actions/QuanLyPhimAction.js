
import axios from "axios";

import { TOKEN_MOVIE } from "../../util/setting";
import { LAY_THONGTIN_PHIM,LAY_DS_PHIM } from "./types/PhimType";
import { history } from "../../App";
import { QuanLyPhimReducer } from "../reducers/QuanLyPhimReducer";
import {quanlyPhimService} from '../../services/QuanlyPhimService.js'
//call API


export const layDanhSachPhimAction =(tenPhim='')=>{
    return async (dispatch)=>{
        try {
            let result = await quanlyPhimService.layDanhSachPhim(tenPhim);
            dispatch({
                type:LAY_DS_PHIM,
                mangPhim: result.data.content
            })
        }catch(err){
            console.log('err',err);
        }
    }
}


export const themPhimUploadHinh = (formData) =>{
    return async (dispatch)=>{
        try {
            let result = await quanlyPhimService.themPhimUploadHinh(formData);
            alert('Thêm Phim thành công')
            history.push('/admin/films')
        }catch(err){
            console.log('err',err);
        }
    }
}

export const layThongTinPhimAction = (maPhim) => {
    return async (dispatch)=>{
        try {
            let result = await quanlyPhimService.layThongTinPhim(maPhim);
            dispatch({
                type:LAY_THONGTIN_PHIM,
                thongTinPhim: result.data.content
            })
        }catch(err){
            console.log('err',err);
        }
    }
}

export const capNhatPhimUploadAction = (formData) =>{
    return async (dispatch)=>{
        try {
            let result = await quanlyPhimService.capNhatPhimUpload(formData);
            alert('Cập nhật thành công')
            history.push('/admin/films')
            dispatch(layDanhSachPhimAction())   
        }catch(err){
            console.log('err',err);
        }
    }
}

export const xoaPhimAction = (maPhim) => {
    return async (dispatch)=>{
        try {
            let result = await quanlyPhimService.xoaPhim(maPhim);
            alert('Xoá Phim thành công')
            dispatch(layDanhSachPhimAction())  
        }catch(err){
            console.log('err',err);
        }
    }

}

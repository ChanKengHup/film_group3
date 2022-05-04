
import axios from "axios";

import { TOKEN_MOVIE } from "../../util/setting";
import { LAY_THONGTIN_PHIM,LAY_DS_PHIM } from "./types/PhimType";
import { history } from "../../App";
import { QuanLyPhimReducer } from "../reducers/QuanLyPhimReducer";
//call API

import { SET_DS_PHIM } from "../type/quanLyPhimType";
import { quanLyPhimService } from "../../services/QuanLyPhimService";



export const layDanhSachPhimAction =(tenPhim='')=>{
    return async (dispatch)=>{
        try {
            let result = await quanLyPhimService.layDanhSachPhim(tenPhim);
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
            let result = await quanLyPhimService.themPhimUploadHinh(formData);
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
            let result = await quanLyPhimService.layThongTinPhim(maPhim);
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
            let result = await quanLyPhimService.capNhatPhimUpload(formData);
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
            let result = await quanLyPhimService.xoaPhim(maPhim);
            alert('Xoá Phim thành công')
            dispatch(layDanhSachPhimAction())  
        }catch(err){
            console.log('err',err);
        }
    }

}



export const layDanhSachReducer = () => {


    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layDanhSachPhim();
            dispatch({
                type:SET_DS_PHIM,
                arrPhim: result.data.content
            })
        }
        catch (error) {
            console.log("error", error);
        }
    }
}

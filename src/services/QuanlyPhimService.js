import { http } from "../util/setting";
import { GROUP_ID } from "./TypeService";

class QuanlyPhimService {
  layDanhSachPhim = (tenPhim)=>{ 
    if(tenPhim.trim() !=''){
      return http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}&tenPhim=${tenPhim}`)
    }
    return http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)
  };

  themPhimUploadHinh = (formData)=>{ 
    return http.post(`/api/QuanLyPhim/ThemPhimUploadHinh`,formData)
  }
  
  layThongTinPhim = (maPhim)=>{ 
    return http.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
  };

  capNhatPhimUpload = (formData)=>{ 
    return http.post(`/api/QuanLyPhim/CapNhatPhimUpload`,formData)
  };
  
  xoaPhim = ()=>{ return http.delete(`/api/QuanLyPhim/XoaPhim`)};

}

export const quanlyPhimService = new QuanlyPhimService();

import { http } from "../util/setting";

class QuanLyDatVeService {
  
  taoLichChieu =(thongTinLichChieu)=>{
    return http.post(`/api/QuanLyDatVe/TaoLichChieu`,thongTinLichChieu)
  }

}

export const quanLyDatVeService = new QuanLyDatVeService();

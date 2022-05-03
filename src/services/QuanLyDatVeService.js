import { http } from "../util/setting";
import { GROUP_ID } from "./TypeService";

class QuanLyDatVeService {
  
  taoLichChieu =(thongTinLichChieu)=>{
    return http.post(`/api/QuanLyDatVe/TaoLichChieu`,thongTinLichChieu)
  }

}

export const quanLyDatVeService = new QuanLyDatVeService();

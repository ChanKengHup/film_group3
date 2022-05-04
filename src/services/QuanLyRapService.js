import { http } from "../util/setting";

class QuanLyRapService{
    layDanhSachRap = ()=> {
        return http.get('/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03')
    }
}
export const quanLyRapService = new QuanLyRapService()
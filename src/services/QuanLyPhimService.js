import { http } from "../util/setting";

class QuanLyPhimService{
    layDanhSachPhim = ()=> {
        return http.get('/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03')
    }
}
export const quanLyPhimService = new QuanLyPhimService()
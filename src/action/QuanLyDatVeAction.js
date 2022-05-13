import { quanLyDatVeService } from "../services/QuanLyDatVeService";
import ThongTinDatVe from "../_core/models/ThongTinDatVe";

export const layChiTietPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);
      if (result.status === 200) {
        dispatch({
          type: 'SET_CHI_TIET_PHONG_VE',
          chiTietPhongVe: result.data.content
        })
      }

    } catch (error) {
      console.log(error);
    }
  }
}

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.datVe(thongTinDatVe);
      console.log(result.data.content);
    } catch (error) {
      console.log(error);
    }
  }
} 
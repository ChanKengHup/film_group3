
import { LAY_DS_ND, LAY_THONGTIN_ND } from "../actions/types/NguoiDungType";

const stateDefaut = {
  mangND: [],
  thongTinND: {},
  mangLoaiND: []

}

export const QuanLyNguoiDungReducer = (state = stateDefaut, action) => {
  switch (action.type) {
    case LAY_DS_ND:
      state.mangND = action.mangND;
      return { ...state };
      case LAY_THONGTIN_ND:
        state.thongTinND = action.thongTinND;
        return { ...state }

    // case LAY_THONGTIN_ND:
    //   state.thongTinPhim = action.thongTinPhim;
    //   return { ...state }


    default:
      return state
  }
}


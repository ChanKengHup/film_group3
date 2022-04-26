// rxr
import { LAY_DS_PHIM ,LAY_THONGTIN_PHIM} from "../actions/types/PhimType";



const stateDefaut = {
  mangPhim: [],
  thongTinPhim: {},

}

export const QuanLyPhimReducer = (state = stateDefaut, action) => {
  switch (action.type) {
    case LAY_DS_PHIM:
      state.mangPhim = action.mangPhim;
      return { ...state }
    case LAY_THONGTIN_PHIM:
      state.thongTinPhim = action.thongTinPhim;
      return { ...state }


    default:
      return state
  }
}

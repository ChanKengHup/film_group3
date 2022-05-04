import { SET_DS_PHIM, SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from "../type/quanLyPhimType"

const stateDefault = {
    arrPhim: [],
    arrPhimDefault: [],
    sapChieu: true,
    dangChieu: false
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch(action.type) {

      case SET_DS_PHIM: {
        state.arrPhim = action.arrPhim
        state.arrPhimDefault = state.arrPhim
        return {...state}
      }
      
      case SET_PHIM_DANG_CHIEU: {
        state.arrPhim =  state.arrPhimDefault.filter((item) => {
           return item.sapChieu === true
        })
        return {...state}
      }

      case SET_PHIM_SAP_CHIEU: {
        state.arrPhim =  state.arrPhimDefault.filter((item) => {
           return item.dangChieu === true
        })
     
        return {...state}
      }

        default:
            return {...state}
    }
}
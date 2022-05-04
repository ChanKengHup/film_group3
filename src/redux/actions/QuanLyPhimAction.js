import { quanLyPhimService } from "../../services/QuanLyPhimService"
import { SET_DS_PHIM } from "../type/quanLyPhimType";



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
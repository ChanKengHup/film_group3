import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../assets/style/reset.scss'
import './style.css'
import styled from 'styled-components';
import { datVeAction, layChiTietPhongVeAction } from '../../action/QuanLyDatVeAction';
import { CheckOutlined, CloseOutlined, UserOutlined } from '@ant-design/icons';
import ThongTinDatVe from '../../_core/models/ThongTinDatVe';

const Checkout = (props) => {
    const dispatch = useDispatch()
    const { userLogin } = useSelector(state => state.LogReducer);
    const { chiTietPhongVe, danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer)

    useEffect(() => {
        let { id } = props.match.params;
        const action = layChiTietPhongVeAction(id);
        dispatch(action)
    }, [])
    const { danhSachGhe, thongTinPhim } = chiTietPhongVe

    const renderSeats = () => {
        return danhSachGhe?.map((seat, index) => {
            let classGheVip = seat.loaiGhe === 'Vip' ? 'ghe-vip' : '';
            let classGheDaDat = seat.daDat === true ? 'ghe-da-dat' : '';
            let classGheDangDat = '';
            let classGheDaDuocDat = '';
            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === seat.maGhe)

            if (userLogin.taiKhoan === seat.taiKhoanNguoiDat) {
                classGheDaDuocDat = 'ghe-da-duoc-dat'
            }

            if (indexGheDD != -1) {
                classGheDangDat = 'ghe-dang-dat'
            }
            return <Fragment key={index}>
                <button onClick={() => {
                    dispatch({
                        type: 'DAT_VE',
                        gheDuocChon: seat
                    })
                }} disabled={seat.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat}`}>
                    {seat.daDat ? classGheDaDuocDat != '' ? <UserOutlined /> : <CloseOutlined /> : seat.stt}
                </button>
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>
        })
    }

    return (
        <CheckoutStyled className="min-height-100vh">
            <div className='grid grid-cols-12 m-t-20'>
                <div className="col-span-9">
                    <div className='screen flex flex-col items-center m-t-5'>
                        <div className='bg-black w-full'></div>
                        <div className="trapezoid">Màn Hình</div>
                        <div className='m-t-30'>
                            {renderSeats()}
                        </div>

                    </div>
                </div>
                <div className="col-span-3">
                    <h3 className='text-center text-2xl text-green-500 fw-700'>
                        {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                            return tongTien += ghe.giaVe;
                        }, 0).toLocaleString()} đ
                    </h3>
                    <hr />
                    <div className=' m-y-20'>
                        <h3 className='text-xl fw-700'>{thongTinPhim?.tenPhim}</h3>
                        <p>Địa điểm: {thongTinPhim?.tenCumRap} - {thongTinPhim?.tenRap}</p>
                        <p>Ngày chiếu: {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</p>
                    </div>
                    <hr />
                    <div className="flex flex-row m-y-20 justify-content-between">
                        <div className='w-4/6'>
                            <span className='text-red-400 text-lg'>Ghế:</span>
                            {(danhSachGheDangDat).map((gheDD, index) => {
                                return <span key={index} className='text-green-500 text-lg'> {gheDD.stt}</span>
                            })}
                        </div>
                        <div className='text-right'>
                            <span className='text-green-800 text-lg'>
                                {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                                    return tongTien += ghe.giaVe;
                                }, 0).toLocaleString()} đ
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className="m-y-20">
                        <i>Email</i> <br />
                        {userLogin.email}
                    </div>
                    <div className="m-y-20">
                        <i>Phone</i> <br />
                        {userLogin.soDT}
                    </div>
                    <div className='mb-0 flex flex-col items-center'>
                        <button onClick={() => {
                            const thongTinDatVe = new ThongTinDatVe();
                            thongTinDatVe.maLichChieu = props.match.params.id;
                            thongTinDatVe.danhSachVe = danhSachGheDangDat;
                            console.log(thongTinDatVe);
                            dispatch(datVeAction(thongTinDatVe))
                        }} className='pointer bg-green-500 text-white w-full text-center p-y-6 fw-500 fs-18 radius-5'>
                            ĐẶT VÉ
                        </button>
                    </div>

                    <div className='m-t-20'>
                        <div className='seat-desc'>
                            <p className='seat-name'>Ghế thường: </p>
                            <button className='ghe'><CheckOutlined /></button>
                        </div>
                        <div className='seat-desc'>
                            <p className='seat-name'>Ghế VIP: </p>
                            <button className='ghe ghe-vip'><CheckOutlined /></button>
                        </div>
                        <div className='seat-desc'>
                            <p className='seat-name'>Ghế đang đặt: </p>
                            <button className='ghe ghe-dang-dat'><CheckOutlined /></button>
                        </div>
                        <div className='seat-desc'>
                            <p className='seat-name'>Ghế đã đặt: </p>
                            <button className='ghe ghe-da-dat'><CloseOutlined /></button>
                        </div>
                        <div className='seat-desc'>
                            <p className='seat-name'>Ghế đã được đặt: </p>
                            <button className='ghe ghe-da-duoc-dat'><UserOutlined /></button>
                        </div>
                    </div>
                </div>
            </div>
        </CheckoutStyled>
    )
}

const CheckoutStyled = styled.div`
    width: 90%;
    margin: 40px auto;

    .bg-black {
        height: 10px;
        width: 80%;
    }

    .trapezoid {
        border-bottom: 50px solid rgba(128, 128, 128, 0.2);
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        height: 0;
        width: 80%;
        filter: drop-shadow(0px 10px 50px grey);
        -webkit-filter: drop-shadow(0px 10px 50px grey);
        -moz-filter: drop-shadow(0px 10px 50px grey);
        text-align: center;
        color: #000;
        line-height: 45px;
    }

    .ghe {
        width: 35px;
        height: 35px;
        border-radius: 5px;
        cursor: pointer;
        margin: 10px;
        background-color: rgb(122, 122, 122);
    }

    .ghe-vip {
        background-color: #e86b36;
    }

    .ghe-dang-dat {
        background-color: rgb(18, 176, 18) !important;
    }
    
    .ghe-da-dat {
        background-color: #fb2c2c;
        color: #fff;
        cursor: no-drop;
    }

    .ghe-da-duoc-dat {
        background-color: rgb(246, 246, 246);
        color: orange !important;
        box-shadow: rgb(255 165 0 / 50%) 0px 0px 4px 1px;
        -webkit-box-shadow: rgb(255 165 0 / 50%) 0px 0px 4px 1px;
    }

    .anticon {
        margin-bottom: 6px;
    }

    .seat-desc {
        display: flex;
        align-items: center;
    
        .seat-name {
            width: 150px;
        }

        .ghe {
            margin: 0 0 10px;
        }

    }
`

export default Checkout;
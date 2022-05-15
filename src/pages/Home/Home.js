import React, { Fragment, useEffect } from "react";
import "../../assets/style/home.css";
import FilmDetail from "../../components/FilmDetail";
import DetailDays from "../Detail/DetailDays";
import { useSelector, useDispatch } from "react-redux";
import { layDSHeThongRapAction } from "../../redux/actions/QuanLyRapAction";
import { HomeCarousel } from "../../components/HomeCarousel/HomeCarousel";

export default function Home() {
<<<<<<< HEAD

  const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    const action = layDSHeThongRapAction()
    dispatch(action)
  }, [])

  return (
    <Fragment>
      <div className='container p-5 m-5'>
=======
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const action = layDSHeThongRapAction();
    dispatch(action);
  }, []);

  return (
    <Fragment>
      <HomeCarousel />

      <div className="container p-5 m-5" style={{ width: "90%" }}>
>>>>>>> 24805cdffd6ad19b204758e2b65a24e007e1ca1d
        <FilmDetail />
        <DetailDays heThongRapChieu={heThongRapChieu} />
      </div>
    </Fragment>
  );
}

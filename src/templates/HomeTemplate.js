<<<<<<< HEAD
import { Route } from "react-router-dom"
import { Fragment, useEffect } from "react"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { HomeCarousel } from "../components/HomeCarousel/HomeCarousel"


export const HomeTemplate = (props) => {

  useEffect(()=>{
    window.scrollTo(0,0)
  })

  return <Route exact path={props.path} render={(propsRoute) => {
    return <Fragment>
      <Header />
      <HomeCarousel />
=======
import { Route } from "react-router-dom";
import { Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export const HomeTemplate = (props) => {
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header />

            <props.component {...propsRoute} />
>>>>>>> 24805cdffd6ad19b204758e2b65a24e007e1ca1d

            <Footer />
          </Fragment>
        );
      }}
    />
  );
};

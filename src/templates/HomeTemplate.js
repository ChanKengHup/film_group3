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

      <props.component {...propsRoute} />

      <Footer />
    </Fragment>
  }} />
}
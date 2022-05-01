import { Route } from "react-router-dom"
import { Fragment } from "react"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { HomeCarousel } from "../components/HomeCarousel/HomeCarousel"


export const HomeTemplate = (props) => {
  return <Route exact path={props.path} render={(propsRoute) => {
    return <Fragment>

      <Header />
      <HomeCarousel />

      {/* CONTENT */}
      <props.component {...propsRoute} />

      <Footer />
    </Fragment>
  }} />
}
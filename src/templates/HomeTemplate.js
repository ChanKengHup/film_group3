import { Route } from "react-router-dom"
import { Fragment } from "react"
import Header from "../components/Header";
import Footer from "../components/Footer";





export const HomeTemplate = (props) => {
  return <Route exact path={props.path} render={(propsRoute) => {
    return <Fragment>
        
       <Header/>

      <props.component {...propsRoute} />

      <Footer/>
    </Fragment>
  }} />
}
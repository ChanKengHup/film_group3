import { Route } from "react-router-dom"
import { Fragment } from "react";

export const CheckoutTemlate = (props) => {
    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment>
            <props.component {...propsRoute} />
        </Fragment>
    }} />
}

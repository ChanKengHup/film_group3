import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk';
import { CarouselReducer } from './reducers/CarouselReducer';
import { ModalReducer } from './reducers/ModalReducer';
import { LoginReducer } from './reducers/LoginReducer';
import { RegisterReducer } from './reducers/RegisterReducer';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer'

const rootReducer = combineReducers({
    CarouselReducer,
    ModalReducer,
    LoginReducer,
    RegisterReducer,
    QuanLyPhimReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))


import {applyMiddleware, combineReducers,createStore} from 'redux'
import thunk from 'redux-thunk'
import {QuanLyPhimReducer} from './reducers/QuanLyPhimReducer'
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer'



const rootReducer = combineReducers({
    QuanLyPhimReducer,
    QuanLyRapReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))
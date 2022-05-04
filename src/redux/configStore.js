import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk';
import { CarouselReducer } from './reducers/CarouselReducer';
import { ModalReducer } from './reducers/ModalReducer';
import { LogReducer } from './reducers/LogReducer';
import { RegisterReducer } from './reducers/RegisterReducer';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer'
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer'

const rootReducer = combineReducers({
 
    
    
  
    CarouselReducer,
    ModalReducer,
    LogReducer,
    RegisterReducer,
    QuanLyPhimReducer,
    QuanLyRapReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))


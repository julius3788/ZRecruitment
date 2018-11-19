import {createStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import countingReducer from '../reducers/counting'
import adkudagReducer from '../reducers/adkudag'
import instReducer1 from '../reducers/inst1'
import instReducer2 from '../reducers/inst2'
import userReducer from '../reducers/user'
import resultReducer from '../reducers/result'

const reducers = combineReducers({
    
   adkudags: adkudagReducer,
   countings: countingReducer,
   instruction1 : instReducer1,
   instruction2 : instReducer2,
   users:userReducer,
   results:resultReducer,
   
})

const middleware = applyMiddleware(thunk,logger )

export default createStore(reducers, middleware)
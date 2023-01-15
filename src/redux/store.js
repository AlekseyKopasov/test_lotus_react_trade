import { combineReducers, createStore } from 'redux'
import timerReducer from './timer-reducer'

const rootReducer = combineReducers({
  timer: timerReducer,
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
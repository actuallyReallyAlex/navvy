import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import dataReducer from './reducers/data'
import uiReducer from './reducers/ui'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({ data: dataReducer, ui: uiReducer }),
  composeEnhancers(applyMiddleware(thunk))
)

export default store

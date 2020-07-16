import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'

import { AddFavReducers, FetchingData} from './reducers'

import thunk from 'redux-thunk'


const reducers = combineReducers({
  listFavorites: AddFavReducers,
  data: FetchingData
})


let store = createStore(reducers, applyMiddleware(thunk));

export default store
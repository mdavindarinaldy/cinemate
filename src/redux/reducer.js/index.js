import { combineReducers } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'
import buyTicket from './buyTicket'
import users from './users'
import currentLogin from './currentLogin'
import history from './historyTransactions'
import movies from './newMovies'

const ticketPersistConfig = {
  key: 'data',
  storage
}

const usersPersistConfig = {
  key: 'users',
  storage
}

const currentLoginPersistConfig = {
  key: 'currentLogin',
  storage
}

const historyPersistConfig = {
  key: 'history',
  storage
}

const newMovies = {
  key: 'newMovies',
  storage
}

const reducer = combineReducers({
  data: persistReducer(ticketPersistConfig, buyTicket),
  users: persistReducer(usersPersistConfig, users),
  currentLogin: persistReducer(currentLoginPersistConfig, currentLogin),
  history: persistReducer(historyPersistConfig, history),
  newMovies: persistReducer(newMovies, movies)
})

export default reducer
import { createStore, combineReducers } from 'redux'

import { overlaysFilter, companiesFilter } from './reducers'

const rootReducer = combineReducers({
  overlaysFilter,
  companiesFilter,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

store.subscribe(() => console.log(store.getState()))
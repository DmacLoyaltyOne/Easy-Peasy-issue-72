import { createStore } from 'easy-peasy'
import search from '../models/search/search'

const store = createStore({
  ...search,
})

export default store

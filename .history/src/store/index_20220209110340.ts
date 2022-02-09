import { createStore } from 'vuex'

const IRootState {
  name: string
}

const store = createStore({
  state: () => {
    return {
      name: 'coderwwhy'
    }
  }
})

export default store

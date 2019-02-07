import { effect } from 'easy-peasy'

const search = {
  search: {
    text: '',
    saveSuccessful: false,
    // Actions
    setText: (state, payload: string) => {
      state.text = payload // 👈 you mutate state to update (we convert
      state.saveSuccessful = true
    },
    // Effects
    saveText: effect(async(dispatch, payload: string, getState) => {
      try {
        // const result = await axios.post('https://google.ca/whatever', payload)
        dispatch.search.setText(payload)
      } catch (e) {
        throw e
      }
    })
  }
}

export default search

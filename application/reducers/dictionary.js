import * as actions from '../actions/actionTypes'

const initialState = {
  translatedText: ''
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case actions.TRANSLATE:
      return Object.assign({}, state, {
        translatedText: action.payload
      })
    default:
      return state
  }
}

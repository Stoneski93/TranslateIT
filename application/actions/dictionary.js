import axios from 'axios'
import * as actions from './actionTypes'

const apiUrl = 'http://www.transltr.org/api'

function translateAction (data) {
  return {
    type: actions.TRANSLATE,
    payload: data
  }
}

export function translate (text) {
  return dispatch => {
    axios.get(`${apiUrl}/translate`, {
      params: {
        text: text,
        to: 'pl'
      }
    })
    .then(({data}) => {
      const {translationText} = data
      dispatch(translateAction(translationText))
    })
  }
}

import { add_favorite, un_favorite, fetching_data, details } from './action_types'
import axios from 'axios'

export const addFavorite = (dataFavorite) => ({
  type: add_favorite,
  payload: {
    dataFavorite
  }
})

export const unFavorite = (idData) => ({
  type: un_favorite,
  payload: {
    idData
  }
})
export const Detail = (url) => {
  return async dispatch => {
    const data = await axios.get(url)
    await dispatch({
      type: details,
      payload: {
        data: data
      }
    })
      .catch(err => dispatch(err))
  }
}

export const fetchingData = (url) => {
  return async dispatch => {
    const data = await axios.get(url)
    // console.log(data);
    await dispatch({
      type: fetching_data,
      payload: {
        data: data
      }
    })
  }
}


// export const searchCard = (text) => ({
//   type: search_card,
//   payload: {
//     text
//   }
// })
import * as types from '../../actionTypes';

export function itemsHasErrored(bool) {
  return {
    type: types.ITEMS_HAS_ERRORED,
    errored: bool
  }
}

export function itemsIsLoading(bool) {
  return {
    type: types.ITEMS_IS_LOADING,
    isLoading: bool
  }
}

export function itemFetchDataSuccess(items) {
  return {
    type: types.ITEMS_FETCH_DATA_SUCCESS,
    items
  }
}

export function errorAfterFiveSeconds() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(itemHasErrored(true))
    }, 5000)
  }
}

export function itemFetchData(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true))

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        return response
      })
      .then(response => response.json())
      .then((items) => {
        dispatch(itemFetchDataSuccess(items))
        dispatch(itemsIsLoading(false))
      })
      .catch((err) => {
        dispatch(itemsHasErrored(true))
        dispatch(itemsIsLoading(false))
      })
  }
}

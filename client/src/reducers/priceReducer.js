export default function reducer(state={
  priceList:{},
  fetching: false,
  fetched: false,
  error: null
}, action){
  switch (action.type) {
    case "GET_PRICE_LIST":{
      return {...state, fetching: true}
    }
    case "FETCH_USERS_FULFILLED":{
      return {
              ...state,
              fetching: false,
              fetched: true,
              priceList:action.payload
              }
    }
     case "FETCH_USERS_REJECTED":{
       return {
                ...state,
                fetching: false,
                error: action.payload
              }
     }

  }
  return state;
}
import axios from "axios";

/* cross domain access */
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['crossDomain'] = true;

export function fetchPriceList(){ //fetchPriceList(date) if dyanamic data fetch
  return function(dispatch){
  	 axios.get('http://localhost:3001/getProfitSummary?date=20180507') /*rt now hardcoding the date */
        .then((response) =>{
        	console.log("fetchPriceList...", response);
          dispatch({type:'FETCH_USERS_FULFILLED', payload:response.data});
        })
        .catch((err) => {
          dispatch({type:'FETCH_USERS_REJECTED',payload:err})
        })
  }
}
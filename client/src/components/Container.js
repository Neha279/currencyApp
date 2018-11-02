import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';

import PriceList from './PriceList.js'

import {fetchPriceList} from "../actions/priceAction.js"


class Container extends React.Component{
  componentWillMount(){
      this.props.dispatch(fetchPriceList());
  }

  render(){
    console.log(this.props.priceList);
    var cardItems = (<a className="card" href="#"> </a>);
    if( this.props && this.props.priceList.currencyList && Object.getOwnPropertyNames(this.props.priceList.currencyList).length > 0){
        cardItems = this.props.priceList.currencyList.map((cValue, index) => {
        return (
          <PriceList currency={cValue.currency} date={this.props.priceList.date}
          sellPrice={cValue.sellPrice} sellTime={cValue.sellTime}
          buyPrice={cValue.buyPrice} buyTime={cValue.buyTime} 
          profit={cValue.profit} key={index}/>
        )
      })
   }

   return (
    <center>
    <div style={{width:'100%'}}>
      <div style={{width:'100%', 
        height: '100%',
        display: 'block'}}>
      {cardItems}
      </div>
    </div> 
    </center>
  )
 }

}
export default connect((store) => {
  // console.log("ins store",store.priceReducer.priceList);
  return {
    priceList: store.priceReducer.priceList
  }
})(Container);

import React from "react";
import ReactDOM from "react-dom";

import Price from './Price.js';

export default class PriceList extends React.Component{
  
  render(){
    console.log("PriceList this.props" , this.props);
    return (
        <a className="card" href="#">
         <span className="card-header" style={{backgroundColor: "lightblue", padding:"5px"}}>
           <b> {this.props.date} </b>
         </span>  
         <span className="card-title">
             <h3>{this.props.currency}</h3>
          </span>
        
        <span className="card-summary">
          <Price col1="Buy" col2="Sell"/>    
          <Price col1={this.props.buyPrice} col2={this.props.sellPrice}/>    
          
          <Price col1={this.props.buyTime} col2={this.props.sellTime}/>    
       </span>
        <span className="card-title" style={{backgroundColor: "#444"}}>
          Profit: {this.props.profit}
        </span>
      </a>
    )
  }
}
import React from "react";
import ReactDOM from "react-dom"

export default class Price extends React.Component{
  render(){
    // console.log("price props",this.props);
    return (
      <ul style={{borderBottom: '1px solid #444', height: "30px", margin: "0", padding: "0"}}>
        <li className="list">
            {this.props.col1} 
         </li>
         <li className="list">
            {this.props.col2} 
         </li>
      </ul>
    )
  }
}
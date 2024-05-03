import React from "react";
class Hello extends React.Component{
  render(){
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}
const btn1 = {
  props:{

  }
}
function Button(props){
  return(
    <button className={`bg-${props.color}`}>
      <b>
        {props.children}
      </b>
    </button>
  )
}
export default Hello
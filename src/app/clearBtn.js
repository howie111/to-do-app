import React from 'react';
import ReactDom from 'react-dom';

class Clearbtn extends React.Component{	
    constructor(){
        super()
        state:{value:'woshi'}
        this.clearComplete= this.clearComplete.bind(this)
    } 
    clearComplete(){
        console.log("hello")
        this.props.child_clearComplete()
    }	
  render(){	
      return <button className='btn btn-warning clearbtn' disabled ={this.props.disabledStatus} onClick={this.clearComplete}> Clear Complete</button>
  }
}

export default Clearbtn;
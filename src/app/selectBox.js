import React from 'react';
import ReactDom from 'react-dom';
class Selectbox extends React.Component{	
    constructor(){
		super()
		this.state ={value:'all'}

    this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.setState({value:e.target.value})
		this.props.showCategory(e.target.value)
		console.log("state "+e.target.value)
	}

	render(){
		return <select className='selectedbox' value={this.state.value} onChange={this.handleChange}>
                 <option value="all">all</option>
                 <option value="active">active</option>
                 <option value="complete">complete</option>
               </select>
	}

}

export default Selectbox;
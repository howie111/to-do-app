
import React from 'react';
import ReactDom from 'react-dom';

class Addform extends React.Component{

    constructor(props){
        super(props)
        this.state ={value:"",placeHolder:"enter something"};
        this.handleChange =this.handleChange.bind(this)
        this.handleSubmit =this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({value:e.target.value})
       
    }
    handleSubmit(e){
       e.preventDefault()
       let newtodo = this.state.value;
       this.props.addList(newtodo)
       this.setState({value:""})  
    }
    render(){
        return (<form onSubmit ={this.handleSubmit}>
                   
                       <div className="input-group">
                           <span className="input-group-btn">
                            <button className = 'btn btn-success' type="submit">Add</button>
                           </span>
                        <input className ='form-control' onChange={this.handleChange} type="text" placeholder={this.state.placeHolder} value={this.state.value} />  
                      </div>
                   
                 </form>	
                 )
    }
 }

 export default Addform;
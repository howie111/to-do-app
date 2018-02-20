
import React from 'react';
import ReactDom from 'react-dom';
class Todolist extends React.Component{	

    constructor(props){
        super(props)
      //   this.state ={todosArr:this.props.todosArr}
        this.handleToggle = this.handleToggle.bind(this);
        this.deleteItemId = this.deleteItemId.bind(this);
       
    }
    handleToggle(e){
        // get the id of todo list which will be toggled
        // and send it to parent component to change the its done attribute
        this.props.toggleComplete(e.target.value)
        console.log("target value is "+e.target.value)
              
    } 
  
    deleteItemId(e){
        this.props.deleteSingleToDo(e)	  
    }
    render(){
      // console.log(this.props.disablebtn)
     let todolist =[];
     if(this.props.selectedCategory=='active'){
         todolist = this.props.todosArr.filter(function(todo){
             if(todo.done ==false){
                 return todo;
             }
         })
     }
     else if (this.props.selectedCategory=='complete'){
        todolist = this.props.todosArr.filter(function(todo){
             if(todo.done ==true){
                 return todo;
             }
         })
  
     }
     else{
         todolist = this.props.todosArr
     }
  
     var render_todolist = todolist.map((todo,i)=>{
      return <li  className={todo.done===true ? 'done text-left':'text-left'}><input value={todo.id} type="checkbox" checked={todo.done} onChange={(e)=>{this.handleToggle(e), this.props.disablebtn()}}/> {todo.text} <button className="btn btn-danger pull-right" onClick={()=>{this.deleteItemId(i)}}>Delete</button></li>;
    })
  
  
      return <ul className='ro'> {render_todolist}</ul> 
   }
  }

  export default Todolist;
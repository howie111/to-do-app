import React from 'react';
import ReactDom from 'react-dom';
import Addform from './addFrom';
import Selectbox from './selectBox';
import Todolist from './todoList';
import Clearbtn from './clearBtn';
import styles from './css/index.css';



class App extends React.Component{
	constructor(){
		super();
		this.state = {
			allincomplete: false,
			todos:[
	            {text: 'Learn angular', done: false, id: 1},
	            {text: 'Write the content for the next module', done: false, id: 2},
	            {text: 'Buy cheese', done: true, id: 3},
	            {text: 'Buy the milk', done: true, id: 4}
	        ],
			selectedCategory:"all",disableClearBtn:false,input:''
		}
		this.addList = this.addList.bind(this);
		this.toggleComplete=this.toggleComplete.bind(this);
		this.clearComplete = this.clearComplete.bind(this);
		this.showSelectedCategory = this.showSelectedCategory.bind(this)
		this.deleteSingleToDo = this.deleteSingleToDo.bind(this)
		this.disableClear = this.disableClear.bind(this)
	}
	disableClear(){
         let is_complete_exsting =this.state.todos.filter((todo)=>{
           if(todo.done ==true)
		   return todo 
		 })
		 if(is_complete_exsting.length>0){
         this.setState({disableClearBtn:false})
		 }
		 else{
          this.setState({disableClearBtn:true})
		 }
	}
	addList(newTask){
		let newTodo = { text:newTask,done:false,id:this.state.todos.length+1}
		this.state.todos.push(newTodo);
		this.setState({todos:this.state.todos})
	}
	toggleComplete(id){
		console.log("you are here" +id)
		let tmp_todos = this.state.todos;

		tmp_todos.forEach(function(todo){
			if(todo.id==id){
				todo.done= !todo.done;
			}
			else{
				todo.done= todo.done;
			}
		})
		 this.setState({todos:tmp_todos})	
	}
	clearComplete(){
		let tmp_todos = this.state.todos.filter(function(todo){
			if(todo.done ==false)
			return todo
		})
		this.setState({todos:tmp_todos})

	}
    showSelectedCategory(selectedState){
		if(selectedState ==='all'){
          this.setState({selectedCategory:'all'})
		}
		else if (selectedState ==='complete')
		{ 
			console.log('complete')
			this.setState({selectedCategory:'complete'})
		}
		else
		{
          console.log('active')
		  this.setState({selectedCategory:'active'})
		}
	}

	deleteSingleToDo(index){
       this.state.todos.splice(index,1);
	   console.log(this.state.todos)
	   this.setState({todos:this.state.todos})
	}
	render(){
		return(
			<div className="container text-center">		
			   <h2>Todo List App</h2>	
			   <div>
                 <Addform addList={this.addList} state={this.state} newInput ={this.state.input} />			
			   </div>
			   <div className="todolist_container">				
               <Todolist toggleComplete={this.toggleComplete} todosArr={this.state.todos} selectedCategory={this.state.selectedCategory} deleteSingleToDo={this.deleteSingleToDo} disablebtn ={this.disableClear}  />
			   </div>
			   <div className='row container_btn_selectbox'>  
			   <Clearbtn child_clearComplete={this.clearComplete} disabledStatus={this.state.disableClearBtn} />			 
			   <Selectbox showCategory ={this.showSelectedCategory}/>	
			    
			   </div>	
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
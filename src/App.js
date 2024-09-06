import './App.css';
import {useState} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () =>{

const [todo, setTodo] = useState("");
const [todos, setTodos] = useState([]);
const [editId, setEditId] = useState(0);


const handlSubmit = (e) =>{
  e.preventDefault();

  if(editId){
    const editTodo = todos.find((t)=>t.id === editId)
    const updateTodos = todos.map((t)=>
      t.id === editTodo.id ? (t = {id: t.id, todo}) : {id: t.id, todo: t.todo}
      )
      setTodos(updateTodos);
      setEditId(0);
      setTodo("");
      return;
  }

  if(todo !== ''){
    setTodos([{id:`${todo}-${Date.now()}`, todo}, ...todos])
    setTodo("");
  }
}

const handleDelete = (id) =>{
  const deteleTodo = todos.filter((t) => t.id!== id);
  setTodos([...deteleTodo])
}

const handleEdit = (id) =>{
    const editTodo= todos.find((t)=>t.id === id)
    setTodo(editTodo.todo);
    setEditId(id)
}

  return <div className='App'>
  
    <div className="container">
      <h1>Todo List App</h1>

      <TodoForm handleSubmit={handlSubmit} todo={todo} setTodo = {setTodo} editId={editId}  />
      <TodoList todos={todos} handleDelete = {handleDelete} handleEdit={handleEdit}/>
      
    </div>

  </div>
}

export default App;

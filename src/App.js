import { useState } from 'react';
import todologo from './todo.png'
import deleteicon from './delete.png'

function App() {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: todo,
      completed: false,
    }

    setTodos([...todos].concat(newTodo))
    setTodo("")
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const deleteTask = (id) => {
    const updateTodo = [...todos].filter((todo) => todo.id !== id)
    setTodos(updateTodo);
  }
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center my-4 shadow-sm p-3 mb-5 bg-body rounded">
          <img src={todologo} alt="logo" /><h1 className='mt-3'>To Do List App</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Write Down Your Today's Task</label>
              <input type="text" className="form-control mt-2 shadow-none" id="taskid" placeholder="Write your task" onChange={handleChange} value={todo} />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Add task</button>
          </form>
        </div>
        <div className='my-3'>
          <h6>Pending Task: </h6>
          {todos.map((task) =>
            <div className="alert alert-primary my-2 py-1 px-3 position-relative" role="alert" key={task.id}>{task.text}
            <button className='position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent' onClick={() => deleteTask(task.id)}><img src={deleteicon} alt="delete" style={{width:'1.5em'}}/></button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

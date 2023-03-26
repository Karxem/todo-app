import './App.css'
import { useState } from 'react'
import { Task } from './components/Task'
import { Header } from './components/Header'

function App() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    if (newTask.trim() === '') {
      return; // if input is empty, do nothing
    }

    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    }
    setTodoList([...todoList, task])
    setNewTask(''); // clear input field after adding a task
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  }

  return (
    <div className="App">
      <p className='title'>To-Do App by karxem</p>
      <div className="content">
        <Header newTask={newTask} handleChange={handleChange} addTask={addTask} />
        <div className='list'>
          <div className="task-wrapper">
            {todoList.map((task) => (
              <Task key={task.id} task={task} deleteTask={deleteTask} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

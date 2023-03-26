import React from "react"
import '../components/Header.css'

export const Header = ({ newTask, handleChange, addTask }) => {
    return (
        <div className="container">
            <div className='addTask'>
                <input value={newTask} onChange={handleChange} />
                <button className="btn" onClick={addTask}>Add Task</button>
            </div>
        </div>
    )
}
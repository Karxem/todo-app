import React from 'react'
import '../components/Task.css'

export const Task = ({ task, deleteTask }) => {
    return (
        <div className='task-card'>
            <div className='task-content'>
                <p>{task.taskName}</p>
            </div>
            <div className='task-action'>
                <button className='button' onClick={() => deleteTask(task.id)}>Done!</button>
            </div>
        </div>
    )
}
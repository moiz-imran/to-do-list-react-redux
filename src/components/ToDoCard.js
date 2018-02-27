import React from 'react'

const ToDoCard = ({ title, text, onCompleted, onRemoved, completed }) => (
    <div>
        <h3>{title}</h3>
        <p>{text}</p>
        Completed: <input type='checkbox' onChange={onCompleted} checked={completed} /> 
        <button onClick={onRemoved}>Remove</button>
    </div>
)

export default ToDoCard
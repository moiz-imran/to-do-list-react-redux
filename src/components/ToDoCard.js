import React from 'react'

const ToDoCard = ({ title, text, onCompleted, onRemoved }) => (
    <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <input type='checkbox' onChange={onCompleted} value='Completed' />
        <button onClick={onRemoved}>Remove</button>
    </div>
)

export default ToDoCard
import React from 'react'

const ToDo = ({ title, onClick, id, completed }) => (
    <button 
        className='button2' 
        onClick={() => onClick(id)}
        style= {{
            backgroundColor: completed ? 'grey' : '#4CAF50'
        }}>
        {title}
    </button>
)

export default ToDo
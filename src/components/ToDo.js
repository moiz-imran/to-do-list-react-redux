import React from 'react'

const ToDo = ({ title, onClick, id }) => (
    <button onClick={() => onClick(id)}>
        {title}
    </button>
)

export default ToDo
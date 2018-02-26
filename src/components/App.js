import React from 'react'
import DateForm from '../containers/DateForm'
import VisibleToDoList from '../containers/VisibleToDoList'

const App = () => (
    <div>
        <h1> To-Do List </h1>
        <DateForm />
        <VisibleToDoList />
    </div>
)

export default App
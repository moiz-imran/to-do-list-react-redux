import React from 'react'
import DateForm from '../containers/DateForm'
import VisibleToDoList from '../containers/VisibleToDoList'
import AddToDo from '../containers/AddToDo'

const App = () => (
    <div>
        <h1> To-Do List </h1>
        <DateForm />
        <VisibleToDoList />
        <AddToDo />
    </div>
)

export default App
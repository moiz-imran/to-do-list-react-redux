import React from 'react'
import DateForm from '../containers/DateForm'
import VisibleToDoList from '../containers/VisibleToDoList'
import AddToDo from '../containers/AddToDo'
import Footer from '../components/Footer'

const App = () => (
    <div>
        <h1> To-Do List </h1>
        <DateForm />
        <VisibleToDoList />
        <AddToDo />
        <Footer />
    </div>
)

export default App
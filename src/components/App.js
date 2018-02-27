import React from 'react'
import DateForm from '../containers/DateForm'
import VisibleToDoList from '../containers/VisibleToDoList'
import AddToDo from '../containers/AddToDo'
import Footer from '../components/Footer'

class App extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            showAdd: false
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick () {
        this.setState({ showAdd: !this.state.showAdd });
    }

    render() {
        return (
            <div align='center'>
                <h1> To-Do List </h1>
                <DateForm />
                <VisibleToDoList />
                <button className='button3' onClick={this.onClick}>Add new</button>
                {this.state.showAdd && <AddToDo onClick={this.onClick}/>}
                <Footer />
            </div>
        )
    }
}
export default App
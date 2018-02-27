import React from 'react'
import Todo from './ToDo'
import ToDoCard from './ToDoCard'

class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: null
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick(id) {
        const { selected } = this.state
        if(id === selected) {
            this.setState({ selected: null })
        } else {
            this.setState({ selected: id })
        }
    }

    render() {
        const { todos, onCompleted, onRemoved, date } = this.props;
        const { selected } = this.state;
        return (
            <ul>
                <h3>{new Date(date).toDateString()}</h3>
                {todos.map(todo => {
                    return (
                        <div key={todo.id}>
                            <Todo
                                {...todo}
                                onClick={this.onClick}
                            />
                            {todo.id === selected && 
                                <ToDoCard
                                    {...todo} 
                                    onCompleted={() => onCompleted(todo.id)}
                                    onRemoved={() => onRemoved(todo.id)}
                                />
                            }
                        </div>
                    )
                })}
            </ul>            
        )
    }
}

export default ToDoList
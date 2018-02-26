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
        this.setState({ selected: id })
    }

    render() {
        const { todos, onCompleted, onRemoved } = this.props;
        const { selected } = this.state;
        return (
            <ul>
                {todos.map(todo => {
                    return (
                        <div key={todo.id}>
                            <Todo
                                title={todo.title}
                                id={todo.id}
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
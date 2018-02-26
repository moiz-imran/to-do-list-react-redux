import React from 'react'
import { connect } from 'react-redux'
import { addToDo } from '../actions'

let AddToDo = ({ date, dispatch }) => {
    let title, text;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    dispatch(addToDo(title.value, text.value, date))
                    title.value = ''
                    text.value = ''
                }}
            >
                <input
                    ref={node => {
                        title = node
                    }}
                />
                <textarea
                    ref={node => {
                        text = node
                    }} 
                />
                <button type="submit">
                    Add ToDo
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        date: state.dateFilter
    }
}

AddToDo = connect(mapStateToProps)(AddToDo)

export default AddToDo
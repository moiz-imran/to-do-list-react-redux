import React from 'react'
import { connect } from 'react-redux'
import { addToDo } from '../actions'

let AddToDo = ({ date, dispatch, onClick }) => {
    let title, text;

    return (
        <div
            className="w3-panel w3-card-4" 
            style={{width:'30%'}}>
            <h3 align='center'>Add To-Do</h3>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    dispatch(addToDo(title.value, text.value, date))
                    title.value = ''
                    text.value = ''
                    onClick()
                }}
            >
                Title:
                <input
                    ref={node => {
                        title = node
                    }}
                    required
                />
                Description:
                <textarea
                    ref={node => {
                        text = node
                    }} 
                />
                <button type="submit">
                    Add To-Do
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
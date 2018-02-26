import React from 'react'
import { connect } from 'react-redux'
import { setDate } from '../actions'

let DateForm = ({ date, dispatch }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    dispatch(setDate(input.value))
                }} 
            >
                <input
                    type='date'
                    defaultValue={date}
                    ref={node => {
                        input = node
                    }}
                />
                <button type="submit">
                    Submit
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

DateForm = connect(mapStateToProps)(DateForm)

export default DateForm;
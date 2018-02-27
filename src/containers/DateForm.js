import React from 'react'
import { connect } from 'react-redux'
import { setDate } from '../actions'

let DateForm = ({ date, dispatch }) => (
    <input
        type='date'
        defaultValue={date}
        onChange={e => {
            e.preventDefault()
            dispatch(setDate(e.target.value))
        }}
    />
)

const mapStateToProps = state => {
    return {
        date: state.dateFilter
    }
}

DateForm = connect(mapStateToProps)(DateForm)

export default DateForm;
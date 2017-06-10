// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import FreeState from '../Free'

const ListState = ({children, ...unused}) => (
    <FreeState {...unused}>
        {({state, set}) => React.Children.only(children({
            state,
            append: val => set([...state, val]),
            prepend: val => set([val, ...state]),
            slice: (...args) => set(state.slice(...args)),
        }))}
    </FreeState>
)

ListState.propTypes = {
    children: PropTypes.func.isRequired,
    initial: PropTypes.array,
}

ListState.defaultProps = {
    initial: [],
}

export default ListState

const SET_VIEW = 'SET_VIEW'
const ADD_ITEM = 'ADD_ITEM'

export const setView = (path, config) => ({
    type: SET_VIEW,
    payload: { path, config },
})

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
})

const initialState = {
    view: {
        path: '',
        config: {},
    },
    items: [],
}

export default (state = initialState, {type, payload}) => {
    if (type === SET_VIEW) {
        return {
            ...state,
            view: payload
        }
    }
    if (type === ADD_ITEM) {
        return {
            ...state,
            items: [
                ...state.items,
                payload
            ]
        }
    }

    return state
}

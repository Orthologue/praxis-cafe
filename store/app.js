const SET_VIEW = 'SET_VIEW'

export const setView = (path, config) => ({
    type: SET_VIEW,
    payload: { path, config },
})

const initialState = {
    view: {
        path: '',
        config: {},
    },
}

export default (state = {}, {type, payload}) => {
    if (type === SET_VIEW) {
        return {
            ...state,
            view: payload
        }
    }

    return state
}

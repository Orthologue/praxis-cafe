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

// generate a unique item id
const generateItemId = state => {
    // our first try
    const candidate = state.items.length + 1

    // if there is already an item with that id
    if (state.items.find(({id}) => id === candidate)) {
        // try against
        return generateItemId()
    }

    return candidate
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
                {
                    id: generateItemId(state),
                    ...payload,
                }
            ]
        }
    }

    return state
}

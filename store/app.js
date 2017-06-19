const SET_VIEW = 'SET_VIEW'
const ADD_ITEM = 'ADD_ITEM'
const SELECT_ITEM = 'SELECT_ITEM'

export const setView = (path, config) => ({
    type: SET_VIEW,
    payload: { path, config },
})

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
})

export const selectItem = id => ({
    type: SELECT_ITEM,
    payload: id
})

const initialState = {
    selectedItem: null,
    items: [],
}

export default (state = initialState, {type, payload}) => {
    // if we are adding an item to the ticket
    if (type === ADD_ITEM) {
        return {
            ...state,
            items: [
                ...state.items,
                // add the payload to the end of the items
                {
                    // make sure it has a unique id
                    id: generateItemId(state),
                    ...payload,
                }
            ]
        }
    }

    // if we are selecting an item from the ticket
    if (type === SELECT_ITEM) {
        return {
            ...state,
            // track the id internally
            selected: payload,
        }
    }

    // its an action we don't recognize, don't do anything
    return state
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


export const CREATE_LIST = "CREATE_LIST"
export const DELETE_LIST = "DELETE_LIST"
export const ADD_ITEM = "ADD_ITEM"
export const ADD_TITLE = "ADD_TITLE"
export const APPLY_ITEM = "APPLY_ITEM"
export const DELETE_ITEM = "DELETE_ITEM"

export const createList = (id) => {
    return async (dispatch) => {
        dispatch({
            type:CREATE_LIST,
            id: id
        })
    }
}

export const deleteList = (id) => {
    return async (dispatch) => {
        dispatch({
            type: DELETE_LIST,
            id: id
        })
    }
}

export const addTitle = (id, title) => {
    return async (dispatch) => {
        dispatch({
            type:ADD_TITLE,
            id: id,
            title: title
        })
    }
}

export const addItem = (id, content) => {
    return async (dispatch) => {
        dispatch({
            type: ADD_ITEM,
            id: id,
            content: content
        })
    }
}

export const applyItem = (id, content, contentId) => {
    return async (dispatch) => {
        dispatch({
            type:APPLY_ITEM,
            id: id,
            content: content,
            contentId: contentId
        })
    }
}

export const deleteItem = (contentId) => {
    return async (dispatch) => {
        dispatch({
            type: DELETE_ITEM,
            contentId: contentId
        })
    }
}
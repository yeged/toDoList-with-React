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
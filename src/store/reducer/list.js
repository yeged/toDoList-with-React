import List from "../../models/List"
import Item from "../../models/Item"
import { CREATE_LIST, DELETE_LIST, ADD_ITEM, ADD_TITLE, APPLY_ITEM, DELETE_ITEM } from "../actions/list"



const initialState = {
    list: [],
    items: []
}

const listReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case CREATE_LIST:
            const newList = new List(
                actions.id,
                "",
                [],

            )
            return {
                ...state,
                list: state.list.concat(newList)
            }
        case DELETE_LIST:
            return {
                ...state,
                list: state.list.filter(list => list.id !== actions.id)
            }
        case ADD_TITLE:
            const listIndex = state.list.findIndex(list => list.id === actions.id)

            const addList = new List(
                actions.id,
                actions.title,
                state.list[listIndex].content,

            )

            const addedTitle = [...state.list]
            addedTitle[listIndex] = addList
            return {
                ...state,
                list: addedTitle,
            }

        default:
            return state;
    }
}

export default listReducer;
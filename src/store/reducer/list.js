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

        default:
            return state;
    }
}

export default listReducer;
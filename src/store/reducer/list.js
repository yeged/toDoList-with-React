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
        case ADD_ITEM:
            const listItemIndex = state.list.findIndex(list => list.id === actions.id)

            const addItemList = new List(
                actions.id,
                state.list[listItemIndex].title,
                actions.content,

            )

            const addedItem = [...state.list]
            addedItem[listItemIndex] = addItemList
            return {
                ...state,
                list: addedItem,
            }
        case APPLY_ITEM:
            const applyItem = new Item(
                actions.id,
                actions.content,
                actions.contentId
            )

            const contentIndex = state.list.findIndex(list => list.id === actions.id)

            const contentEmpty = new List(
                actions.id,
                state.list[contentIndex].title,
                "",

            )

            const contents = [...state.list]
            contents[contentIndex] = contentEmpty
            
            return {
                ...state,
                list: contents,
                items: state.items.concat(applyItem)
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.contentId !== actions.contentId)
            }
        default:
            return state;
    }
}

export default listReducer;
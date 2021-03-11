import List from "../../models/List"
import Item from "../../models/Item"


const initialState = {
    list: [],
    items: []
}

const listReducer = (state = initialState, actions) => {
    switch (actions.type) {
        
        default:
            return state;
    }
}

export default listReducer;
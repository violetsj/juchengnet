/* eslint-disable default-case */
import { fromJS } from "immutable"
import { GET_SHOW_DATA } from './actionCreator'
const defaultStore = fromJS({
    showListData: []
})

export default (state = defaultStore, action) => {
    // console.log(action);
    switch (action.type) {
        case GET_SHOW_DATA://
            return state.update("showListData", (x) => x.concat(fromJS(action.res)));
    }
    return state;
}
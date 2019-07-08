/* eslint-disable default-case */
import { fromJS } from "immutable"
import { Get_DATA } from "./actionCreator"
const defaultStore = fromJS({
    num: 0,
    infolist: [],
})
export default (state = defaultStore, action) => {
    switch (action.type) {
        case Get_DATA:
            return state.update("infolist", (x) => x.concat(fromJS(action.res)))
    }
    return state;
}
import { fromJS } from "immutable"
import { Get_Show } from "./actionCreator"
const defaultStore = fromJS({
   remlist:[],
})
export default (state = defaultStore, action) => {
    
    switch (action.type) {
        case Get_Show:
                // console.log(action)
            return state.update("remlist", (x) => x.concat(fromJS(action.res)))
    }
    return state;
}
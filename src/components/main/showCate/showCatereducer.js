/* eslint-disable default-case */
import {fromJS} from "immutable"
import { GET_LIST_SHOW } from './actionCreator'
import {GET_SHOW_CATE} from './actionCreator'
const defaultStore=fromJS({
    listshow: [],
    showcate:[]
})

export default (state = defaultStore, action) => {
    // console.log(action.type);
    switch (action.type){
        case GET_LIST_SHOW:
            // console.log(state.update("showcate", (x) => x.concat(fromJS(action.res))));
            return state.update("listshow", (x) => x = (fromJS(action.res)));
        case GET_SHOW_CATE:
                // console.log(state.update("showcate", (x) => x.concat(fromJS(action.res))));
            return state.update("showcate", (x) => x.concat(fromJS(action.res)));
    }
    
    return state;
}


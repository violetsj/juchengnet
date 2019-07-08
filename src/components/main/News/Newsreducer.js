/* eslint-disable default-case */
import { fromJS } from "immutable"
import { Get_SILDE,GET_CLASS_ITEM,Get_AD,Get_RecommendList,Get_TOUR,Get_HotTheatre,Get_getRecommendShow} from "./actionCreator"
const defaultStore = fromJS({
    carousel: [],//轮播
    item:[],//下方导航
    classify_list:[],//焦点图
    operation_list:[],//广告图
    imgs:[],//一长条图片
    hotshow:[],//热门演出
    tourList:[],//巡回演出
    hotlist:[],//热门场馆
    recommen:[],//为你推荐
})
export default (state = defaultStore, action) => {
    switch (action.type) {
        case Get_SILDE://轮播
            return state.update("carousel", (x) => x.concat(fromJS(action.res)));

         case GET_CLASS_ITEM://下方导航//焦点图//广告图
            return state.update('item',(x)=>x.concat(fromJS(action.res1)))
            .update('classify_list',(x)=>x.concat(fromJS(action.res2)))
            .update('operation_list',(x)=>x.concat(fromJS(action.res3)));

        case Get_AD://一长条图片
            return state.update("imgs", (x) => x.concat(fromJS(action.res)));

        case Get_RecommendList://热门演出
            return state.update('hotshow',(x)=>x.concat(fromJS(action.res)));

        case Get_TOUR://巡回演出
            return state.update('tourList',(x)=>x.concat(fromJS(action.res)));

        case Get_HotTheatre://热门球馆
            return state.update('hotlist',(x)=>x.concat(fromJS(action.res)));

        case Get_getRecommendShow://为你推荐
            return state;
            // .update('recommen',(x)=>x.concat(fromJS(action.res)));
    }
    return state;
}
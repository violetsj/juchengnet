import axios from "axios"
//首页轮播接口
export const Get_SILDE= "/news/get_sildelist";
export const Get_SILDEFn = (res) => ({
    type: Get_SILDE,
    res
})
export const GetSildeList = (dispatch,initSwiper) => {
    return () => {
        return axios({
            method: 'get',
            url: 'apis/home/getSildeList',
            data: {
                abbreviation: '',
                limit: '',
                version: '5.1.4',
                referer: '2'
            }
        }).then((res) => {
            dispatch(Get_SILDEFn(res.data.data.silde_list));
            initSwiper();
        })

    }

}
//下面导航
export const GET_CLASS_ITEM='info/getClassifyItem'
export const getClassifyItem=(res1,res2,res3)=>{
    return {
        type:GET_CLASS_ITEM,
        res1,
        res2,
        res3

    }
}
export const getClassifyItemAsyanc=(dispatch)=>{
    return ()=>{ 
        axios({
            method: 'get',
            url: 'apis/home/getClassifyItem',
            data: {
                city_id: '0',
                operation_limit: '5',
                version: '5.1.4',
                referer: '2',
            }
        }).then((res)=>{
            dispatch(getClassifyItem(res.data.data.bottom_slide_list, res.data.data.classify_list, res.data.data.operation_list))
            // console.log(res.data.data.operation_list);
        })
    }
}
//一长条图片
export const Get_AD= "/news/get_AD";
export const Get_ADEFn = (res) => ({
    type: Get_AD,
    res
})
export const GetAd = (dispatch) => {
    return () => {
        return axios({
            method: 'get',
            url: 'apis/home/getAd',
            data: {
                city_id: '0',
            version: '5.1.4',
            referer: '2'
            }
        }).then((res) => {
            dispatch(Get_ADEFn(res.data.data.advert1))
        })

    }

}
//热门演出
export const Get_RecommendList= "/news/get_HOTS_RecommendList";
export const Get_RecommendListFn = (res) => ({
    type: Get_RecommendList,
    res
})
export const GetHotsRecommendList = (dispatch,swiper2) => {
    return () => {
        return axios({
            method: 'get',
            url: 'apis/home/getHotsRecommendList',
            data: {
                city_id: '0',
                rows: '50',
                version: '5.1.4',
                 referer: '2'
            }
        }).then((res) => {
            dispatch(Get_RecommendListFn(res.data.data.hots_show_list.slice(0, 10)));
            swiper2()
        })

    }

}
// 巡回演出 
export const Get_TOUR= "/news/get_TOUR_RecommendList";
export const Get_RecommendListTOURfn = (res) => ({
    type: Get_TOUR,
    res
})
export const GetRecommendListTOUR = (dispatch,initSwiper) => {
    return () => {
        return axios({
            method: 'get',
            url: 'apis/home/getTourRecommendList',
            data: {
                city_id: '0',
                rows: '6',
                version: '5.1.4',
                referer: '2'
            }
        }).then((res) => {//this.props.handleTOUR()GetRecommendListTOUR
            dispatch(Get_RecommendListTOURfn(res.data.data.tour_show_list));
            initSwiper()
        })
    }
}
//热门场馆
export const Get_HotTheatre= "/news/get_HotTheatre";
export const Get_HotTheatrefn = (res) => ({
    type: Get_HotTheatre,
    res
})
export const GetHotTheatre = (dispatch,initSwiper) => {
    return () => {
        return axios({
            method: 'get',
            url: 'apis/home/getHotTheatre',
            data: {
                limit: '6',
            version: '5.1.4',
            referer: '2'
            }
        }).then((res) => {
            dispatch(Get_HotTheatrefn(res.data.data.theatre_list));
            initSwiper()
        })
    }
}
//为你推荐
export const Get_getRecommendShow= "/news/get_getRecommendShow";
export const Get_getRecommendShowfn = (res) => ({
    type: Get_getRecommendShow,
    res
})
export const GetRecommendShow = (page,dispatch) => {
    return () => {
        return axios({
            method: 'get',
            url: 'apis/home/getRecommendShow',
            data: {
                cityAdd:'',
                page: page,
                version: '5.1.4',
                referer: '2'
            }
        }).then((res) => {
            dispatch(Get_HotTheatrefn(res.data.data.recommend_show_list));
            // initSwiper()
        })
    }
}

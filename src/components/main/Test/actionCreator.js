import axios from "axios"
//下拉接口  为你推荐
export const Get_Show= "/news/getRecommendShow";
export const Get_RecommendFn = (res) => ({
    type: Get_Show,
    res
})
export const GetRecommend = (dispatch) => {
    return () => {
        return axios({
            method: 'get',
            url: 'apis/home/getRecommendShow',
            data: {
                cityAdd:'',
                page: 1,
                version: '5.1.4',
                referer: '2'
            }
        }).then((res) => {
            // console.log(res)
            dispatch(Get_RecommendFn(res.data.data.recommend_show_list));
        })
    }
}
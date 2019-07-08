import axios from "axios"

//演出列表
export const GET_LIST_SHOW = "showCate/ListShow";
export const listShow = (res) => {
    return {
        type: GET_LIST_SHOW,
        res
    }
}
export const ListShow = (dispatch) => {
    // var n1 = n1;
    return () => {
        axios({
            method: 'get',
            url: 'apis/Search/getShowList',
            params: {
                category: 0,
                city_id: "0",
                page: "1",
                keywords: "",
                version: "5.1.4",
                referer: "2"
            }
        }).then((res) => {
            // console.log(res);
            dispatch(listShow(res.data.data.list));
            // console.log(res.data.data.list)
        })
    }

}

//演出导航

export const GET_SHOW_CATE = "showCate/ShowCategory";
export const showCate = (res) => {
    return {
        type: GET_SHOW_CATE,
        res
    }
}
export const ShowCategory = (dispatch) => {
    // var n1 = n1;
    return () => {
        // Search/getShowList?category=35&city_id=0&page=1&keywords=&&version=5.1.4&referer=2
        axios({
            method: 'get',
            url: 'apis/Search/getShowCategory',
            params: {
                category: "35",
                city_id: "0",
                page: "1",
                keywords: "",
                version: "5.1.4",
                referer: "2"
            }
        }).then((res) => {
            dispatch(showCate(res.data.data.show_category_list));
            // console.log(res.data.data.show_category_list)
        })
    }
}
import axios from "axios"
export const GET_SHOW_DATA = "showList/GetshowListData";
export const showListData = (res) => {
    return {
        type: GET_SHOW_DATA,
        res
    }
}
export const GetshowListData = (dispatch) => {

    return () => {
        axios({
            method: 'get',
            url: 'apis/Theatre/showListData',
            params: {
                tid:2,
                category:0,
                page:1,
            }
        }).then((res) => {
            dispatch(showListData (res.data.datas));
            // console.log(res.data.datas)
        })
    }
   
}
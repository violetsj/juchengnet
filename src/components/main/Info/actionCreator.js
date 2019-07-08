import axios from "axios"
import { log } from "util";

export const Get_DATA = "/info/get_datalist";

export const Get_DATAFn = (res) => ({
    type: Get_DATA,
    res
})
export const GET_DATAajax = (dispatch, fn) => {
    return () => {
        return axios({
            method: 'get',
            url: '/apis/RestTheatre/getTheatreList',
            data: {
                page: "1",
                version: "5.1.4",
                referer: "2"
            }
        }).then((res) => {
            res.data.data.theatre_list.map((item) => {
                if (item.show_list[8]) {
                    item.show_list[8].show_time = "";
                    item.show_list[8].pic = true;
                    item.show_list = item.show_list.slice(0, 9);
                }
            })

            // console.log(res.data.data.theatre_list);
            dispatch(Get_DATAFn(res.data.data.theatre_list));
            fn();
        })

    }

}
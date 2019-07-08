// 事件监听
const EventList = {};

// EventList.text = [(res) => { console.log(res); }];
// EventList.text[0]("ok")
// 执行
const on = function (eventname, callback) {
    if (!EventList[eventname]) {
        EventList[eventname] = [];
    }
    EventList[eventname].push(callback);
}
// on("text", (res) => { console.log(res); })
// EventList.text[0]("ok")
// on("text", (res) => { console.log(res); })
// on("text", (res) => { console.log(res); })
// on("text", (res) => { console.log(res); })
// on("texto", (res) => { console.log(res); })

// 传参
const emit = function (eventname, params) {
    if (!EventList[eventname]) return;
    // console.log(EventList);//{text: Array(3)}=>{text:fn,fn,fn}
    // EventList[eventname].map(ele => { console.log(ele); })// 三个函数
    EventList[eventname].map(cb => { cb(params) })
}
emit("text", "ok")//结果是输出三个ok
emit("texto", "sss")

const off = function (eventname, callback) {
    if (!EventList[eventname]) return;
    EventList[eventname] = [];

}
off("texto")
emit("texto", "sss")
export default {
    $on: on,
    $emit: emit,
    $off: off
}

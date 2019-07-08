const proxy = require('http-proxy-middleware');

module.exports = function (app) {
// http://localhost:3000/login?name=haha&yes=sada
	var userInfo = [];
	app.get("/login", (req, res) => {
		userInfo.push(req.query)
		res.send("OK1");
	})
	// http://localhost:3000/getUserInfo
	app.get("/getUserInfo", (req, res) => {
        res.status(200);
        res.json(userInfo);
        res.send('ok2')
	})
	app.use(proxy('/apis', {
		target: 'https://m.juooo.com',
		changeOrigin: true,
		pathRewrite: {
			'^/apis': ''
		}
	}));
};
// const proxy = require('http-proxy-middleware');

// // 所有http请求都会从这个中间件过
// module.exports = function (app) {
//     app.use(proxy('/apis', {
//         // 需要代理的主机
//         target: 'https://m.juooo.com',
//         // 是否跨域
//         changeOrigin: true,
//         //代理完成将url复写
//         pathRewrite: {
//             "^/apis": ""
//         }
//     }))
// }
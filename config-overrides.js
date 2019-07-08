/* eslint-disable no-unused-vars */
const path = require('path');
const { override, fixBabelImports,addWebpackAlias } = require('customize-cra');
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
module.exports = override(
    // 配置别名
     addWebpackAlias({        
        ["@"]: path.resolve(__dirname, "src")
         // ["mock"]: path.resolve(__dirname, "src/mock")            
    }),
    // 配置 ant 按需引入
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    })
)
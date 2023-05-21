const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

module.exports={
    devServer:{
        proxy:{
            '/api':{
                target:'http://localhost:3333',
                changeOrigin:true,
                pathRewrite:{
                "^/api":""
                }
            },
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@public': resolve('public'),
            }
        }
    }
}
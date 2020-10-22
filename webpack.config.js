const path = require("path");
module.exports ={
    entry:path.resolve(__dirname,"./main.js"),
    output:{
        filename:"index.js",
        path:path.resolve(__dirname,"./dist")
    },
    devtool:"source-map",
    //热刷新
    devServer:{
        contentBase:path.resolve(__dirname,"./dist"),//contentBase项目启动得根目录
    }
}
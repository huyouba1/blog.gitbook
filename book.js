module.exports = {
    // 书籍信息
    titile: "书名",
    description: "描述",
    isbn: "图书编号",
    author: "作者",
    lang: "zh-cn",
    // 插件列表
    plugins: ["-lunr", "-search", "search-pro","code","-livereload","theme-hqbook","back-to-top-button","expandable-chapters"],
    // 插件全局配置
    pluginsConfig: {
        "theme-hqbook":{
            "favicon": "./favicon.ico",
            "logo":"./logo.png",
            "search-placeholder":"输入关键字搜索",
			"copyButtons": true,
			"copyLines": true,
			"dragSplitter": true,
            "hide-elements": [
                ".summary .gitbook-link"
            ],
            "flexible-linkcard": {
                "title": "flexible-linkcard",
                "hrefUrl": "https://github.com/HaoqiangChen/gitbook-plugin-flexible-linkcard",
                "target": "_blank",
                "imgSrc": "./book/logo.png",
                "imgClass": "rect"
            }
        },
        "expandable-chapters":{}
    },
    // 模板变量
    variables: {
        // 自定义
    },

};
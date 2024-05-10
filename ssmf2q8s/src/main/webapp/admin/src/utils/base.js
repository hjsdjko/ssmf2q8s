const base = {
    get() {
                return {
            url : "http://localhost:8080/ssmf2q8s/",
            name: "ssmf2q8s",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmf2q8s/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "电影订票系统小程序"
        } 
    }
}
export default base

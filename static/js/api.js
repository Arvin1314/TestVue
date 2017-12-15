
import  Request from './net/net-axios.js'



//私有方法，外部不能调用
function get(url, params) {
    return Request.get(url,params)
}

//私有方法，外部不能调用
function post(url, params) {
    return Request.post(url,params)
}

export default {
    
    /**
     * 首页数据
     */
    Posts() { 
        return get('/banners_feed')
    },
    /**
     * 优质病例
     */
    HighPosts() { 
        var params = new URLSearchParams();
        params.append('quality', 'high');
        return get('/banners_feed',params)
    },

    /**
     * 用户登录
     */
    Login(params) { 
        return post('/login',params)
    }


}